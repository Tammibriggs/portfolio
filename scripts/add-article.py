"""Add an article to src/data/articles.json from its link.

Reads the title, summary, publication date and cover image from the page,
saves the cover as public/assets/articles/<slug>.webp, and inserts the entry.
Review the printed entry: page descriptions are sometimes marketing copy.

    python3 scripts/add-article.py URL --tags "react, firebase" --language javascript
    python3 scripts/add-article.py URL --dry-run        # show the entry, change nothing

Options:
    --tags "a, b"       topic tags, shown on the card and used by the framework filter
    --language NAME     language for the Languages filter (javascript, python, ...)
    --summary TEXT      use this instead of the page's description
    --date YYYY-MM-DD   use this when the page doesn't say when it was published
    --featured          one of the three featured articles on the Articles page

Saving the cover as WebP needs ImageMagick (`convert` or `magick`).
"""

import argparse
import html
import json
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "articles.json"
IMAGES = ROOT / "public" / "assets" / "articles"
AUTHOR = "Taminoturoko"  # warn when the page doesn't credit this name
HEADERS = {"User-Agent": "Mozilla/5.0 (portfolio add-article script)"}


def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=60) as response:
        return response.read()


def normalise(link):
    return re.sub(r"^https?://(www\.)?", "", link.strip()).rstrip("/").lower()


def meta(page, name):
    for pattern in (
        r'<meta[^>]+(?:property|name)="%s"[^>]+content="([^"]*)"' % re.escape(name),
        r'<meta[^>]+content="([^"]*)"[^>]+(?:property|name)="%s"' % re.escape(name),
    ):
        match = re.search(pattern, page)
        if match:
            return html.unescape(match.group(1)).strip()
    return None


def published_date(page):
    """The page's publication date as YYYY-MM-DD, or None."""
    match = re.search(r'"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})', page)
    if match:
        return match.group(1)
    value = meta(page, "article:published_time")
    if value:
        return value[:10]
    # Visible text such as "Published on January 9, 2026" (ButterCMS)
    text = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", page)))
    match = re.search(r"Published on ([A-Z][a-z]+)\.? (\d{1,2}), (\d{4})", text)
    if match:
        month, day, year = match.groups()
        for month_format in ("%B", "%b"):
            try:
                return datetime.strptime(f"{month} {day} {year}", f"{month_format} %d %Y").strftime("%Y-%m-%d")
            except ValueError:
                pass
    return None


def byline(page):
    """The credited author's name, or None if the page doesn't say."""
    match = re.search(r'"author"\s*:\s*\[?\s*\{[^}]*?"name"\s*:\s*"([^"]+)"', page)
    if match:
        return html.unescape(match.group(1))
    name = meta(page, "author")
    if name and not name.startswith("http"):
        return name
    # Visible text such as "Maab Saleem Published on January 9, 2026" (ButterCMS)
    text = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", page)))
    match = re.search(r"([A-Z][\w'’-]+(?: [A-Z][\w'’-]+){1,3}) Published on", text)
    return match.group(1) if match else None


def clean_title(title, site):
    # "How to build X - LogRocket Blog" -> "How to build X"
    for separator in (" - ", " | ", " — "):
        head, _, tail = title.rpartition(separator)
        if head and (site and tail.strip().lower() == site.lower() or tail.strip().endswith("Blog")):
            return head.strip()
    return title.strip()


def save_cover(image_url, slug):
    IMAGES.mkdir(parents=True, exist_ok=True)
    tool = shutil.which("magick") or shutil.which("convert")
    data = fetch(image_url)
    if not tool:
        extension = Path(image_url.split("?")[0]).suffix or ".jpg"
        dest = IMAGES / f"{slug}{extension}"
        dest.write_bytes(data)
        print("ImageMagick not found: saved the cover as-is.", file=sys.stderr)
    else:
        dest = IMAGES / f"{slug}.webp"
        with tempfile.NamedTemporaryFile() as tmp:
            tmp.write(data)
            tmp.flush()
            subprocess.run([tool, tmp.name + "[0]", "-resize", "960x>", "-quality", "80", str(dest)], check=True)
    return "/" + str(dest.relative_to(ROOT / "public"))


def main():
    parser = argparse.ArgumentParser(description="Add an article to src/data/articles.json")
    parser.add_argument("url")
    parser.add_argument("--tags", default="")
    parser.add_argument("--language", default="")
    parser.add_argument("--summary")
    parser.add_argument("--date")
    parser.add_argument("--featured", action="store_true")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    articles = json.loads(DATA.read_text())
    if any(normalise(a["link"]) == normalise(args.url) for a in articles):
        sys.exit("That article is already in src/data/articles.json.")

    page = fetch(args.url).decode("utf-8", errors="replace")
    site = meta(page, "og:site_name")
    title = clean_title(meta(page, "og:title") or meta(page, "twitter:title") or "", site)
    summary = args.summary or meta(page, "og:description") or meta(page, "description") or ""
    date = args.date or published_date(page)
    image_url = meta(page, "og:image") or meta(page, "twitter:image")

    problems = []
    if not title:
        problems.append("no title found on the page")
    if not date:
        problems.append("no publication date found: pass --date YYYY-MM-DD")
    if summary.startswith("This is a submission"):
        problems.append("the description is DEV's automatic excerpt: pass --summary")
    if problems:
        sys.exit("Not added: " + "; ".join(problems) + ".")
    credited = byline(page)
    if credited and AUTHOR.lower() not in credited.lower():
        print(f"Warning: the byline says {credited!r}, not {AUTHOR}. Check it before publishing.", file=sys.stderr)
    elif not credited and AUTHOR.lower() not in page.lower():
        print(f"Warning: the page doesn't mention {AUTHOR}. Check the byline before publishing.", file=sys.stderr)

    slug = re.sub(r"[^a-z0-9-]+", "-", normalise(args.url).split("/")[-1])[:60].strip("-")
    entry = {
        "title": title,
        "link": args.url.strip(),
        "publishedDate": date,
        "summary": summary,
        "image": None,
        "tags": [t.strip().lower() for t in args.tags.split(",") if t.strip()],
        "language": [l.strip().lower() for l in args.language.split(",") if l.strip()],
    }
    if args.featured:
        entry["featured"] = True

    if args.dry_run:
        entry["image"] = f"(would download {image_url})" if image_url else None
        print(json.dumps(entry, indent=2, ensure_ascii=False))
        return

    entry["image"] = save_cover(image_url, slug) if image_url else None
    articles.append(entry)
    articles.sort(key=lambda a: a["publishedDate"], reverse=True)
    DATA.write_text(json.dumps(articles, indent=2, ensure_ascii=False) + "\n")
    print(json.dumps(entry, indent=2, ensure_ascii=False))
    print(f"\nAdded. {len(articles)} articles in {DATA.relative_to(ROOT)}.")


if __name__ == "__main__":
    main()

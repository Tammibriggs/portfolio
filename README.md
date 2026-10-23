# Taminoturoko Briggs: portfolio

The source of https://tammibriggs.netlify.app/, built with React and React Router. Every page is pre-rendered to static HTML when the site is built, so it shows before any JavaScript loads and each page has its own title and link preview.

## Run it

Requires Node.js 22 or newer.

```bash
npm install
npm run dev      # development server with live reload (npm start does the same)
npm run build    # builds the site into build/client
```

Netlify runs `npm run build` and publishes `build/client` (see `netlify.toml`).

## Where things live

| Path | What it is |
|---|---|
| `src/routes.js` | Each page's address and the file that renders it |
| `react-router.config.js` | The pages to pre-render. Add a new page's address here too |
| `src/root.jsx` | The HTML document, theme handling, header and footer around every page |
| `src/pages/` | One file per page. Each exports `meta` for its title and link preview |
| `src/data/articles.json` | Every article. The home page shows the five newest; `"featured": true` marks the three at the top of the Articles page |
| `src/data/docs.js` | The documentation case studies, with notes on each field |
| `src/data/projects.js` | The software projects |
| `public/assets/` | Images, including article covers and case-study screenshots |

## Add an article

```bash
python3 scripts/add-article.py URL --tags "react, firebase" --language javascript
```

It reads the title, summary, date and cover image from the page, saves the cover in `public/assets/articles/`, and adds the entry to `src/data/articles.json`. Add `--dry-run` to see the entry without changing anything. It warns if the byline isn't yours, and asks for `--summary` or `--date` when the page doesn't give them.

## Settings

`REACT_APP_GOOGLE_ANALYTICS_ID` turns on Google Analytics in production builds. Put it in `.env.local` locally, and in Netlify's environment variables for the live site.

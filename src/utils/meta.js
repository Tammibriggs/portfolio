const SITE = "https://tammibriggs.netlify.app";

// A page's <title>, description and link-preview tags. React Router doesn't
// combine these across pages, so every page returns the full set.
export function pageMeta({ title, description, path = "/", noindex = false }) {
  const url = SITE + path;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:image", content: `${SITE}/og-image.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content: "Taminoturoko Briggs, technical writer for APIs and developer tools",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: url },
    ...(noindex ? [{ name: "robots", content: "noindex" }] : []),
  ];
}

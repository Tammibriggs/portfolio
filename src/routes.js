import { index, route } from "@react-router/dev/routes";

// Each page's address and the file that renders it. New pages also go in
// the prerender list in react-router.config.js.
export default [
  index("pages/Home.jsx"),
  route("docs", "pages/Docs.jsx"),
  route("blog", "pages/Articles.jsx"),
  route("contact", "pages/Contact.jsx"),
  // Any other address; built as 404.html, which Netlify serves for unknown paths
  route("*", "pages/NotFound.jsx"),
];

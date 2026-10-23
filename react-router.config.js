// Every page is built into static HTML when the site is built ("pre-rendered"),
// so its content shows before any JavaScript loads, and link previews and
// search engines can read each page's own title and description.
// Add a page's address here when you add its route in src/routes.js.
export default {
  appDirectory: "src",
  ssr: false,
  prerender: ["/", "/docs", "/blog", "/contact", "/404"],
};

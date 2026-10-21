// Publication names for the sites my articles appear on, keyed by hostname.
const PUBLICATIONS = {
  "blog.logrocket.com": "LogRocket",
  "css-tricks.com": "CSS-Tricks",
  "sitepoint.com": "SitePoint",
  "strapi.io": "Strapi",
  "webiny.com": "Webiny",
  "buttercms.com": "ButterCMS",
  "coderpad.io": "CoderPad",
  "blog.loginradius.com": "LoginRadius",
  "blog.openreplay.com": "OpenReplay",
  "dev.to": "DEV",
};

export function getPublication(link) {
  try {
    const host = new URL(link).hostname.replace(/^www\./, "");
    return PUBLICATIONS[host] || host;
  } catch (e) {
    return null;
  }
}

// "2022-10-14" → "Oct 2022"
export function formatMonth(date) {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

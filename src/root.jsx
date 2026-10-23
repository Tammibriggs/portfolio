import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import "./index.css";
import "./app.css";
import Header from "./components/Header";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import { ContextProvider } from "./context";
// Hotjar is off. To turn it on: import Hotjar from "@hotjar/browser" and call
// Hotjar.init(siteId, 6) in the analytics effect below.

const THEME_KEY = "theme";
const THEME_COLORS = { light: "#fbfaf8", dark: "#121417" };

// Runs in <head> before the page paints. It picks the theme (a saved choice,
// otherwise the system setting) and sets it as the <html> id, which the colour
// tokens in app.css key off, so dark-theme visitors never see a light flash.
// The "js" class lets CSS hide things that only JavaScript reveals.
const themeScript = `(function () {
  var root = document.documentElement;
  root.classList.add("js");
  try {
    var theme = localStorage.getItem("${THEME_KEY}");
    if (theme !== "light" && theme !== "dark") {
      theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    root.id = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "${THEME_COLORS.dark}" : "${THEME_COLORS.light}";
  } catch (e) {}
})();`;

export const links = () => [
  { rel: "icon", href: "/assets/logo.webp" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,600&display=swap",
  },
];

// The HTML document around every page
export function Layout({ children }) {
  return (
    // The head script changes <html> before React loads; that's expected
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={THEME_COLORS.light} suppressHydrationWarning />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Meta />
        <Links />
      </head>
      <body>
        {/* A copy of the contact form's fields, so Netlify finds the form when
            it scans the built pages (the visible form is in Email.jsx) */}
        <form name="contact_form" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// The site shell: header, the current page, social links and footer
export default function App() {
  // Pre-rendered HTML is always built light, so start light to match it, then
  // take the theme the head script picked
  const [isLight, setIsLight] = useState(true);
  const [themeReady, setThemeReady] = useState(false);
  // True once the visitor uses the theme switch. Until then nothing is saved,
  // so the site keeps following their system setting.
  const themeChosen = useRef(false);
  const chooseTheme = (light) => {
    themeChosen.current = true;
    setIsLight(light);
  };

  useEffect(() => {
    setIsLight(document.documentElement.id !== "dark");
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    const theme = isLight ? "light" : "dark";
    document.documentElement.id = theme;
    if (themeChosen.current) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {}
    }
    // Keeps the mobile browser bar in the page's colour
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
  }, [isLight, themeReady]);

  // Analytics only run in the browser, in production builds
  useEffect(() => {
    const id = import.meta.env.REACT_APP_GOOGLE_ANALYTICS_ID;
    if (import.meta.env.PROD && id) ReactGA.initialize(id);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <ContextProvider value={{ isLight, setIsLight: chooseTheme }}>
          <Header />
          <Outlet />
          <Socials />
          <Footer />
        </ContextProvider>
      </div>
    </div>
  );
}

// Shown if a page fails to render
export function ErrorBoundary({ error }) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <div className="app">
      <div className="container">
        <main className="wrapper errorPage">
          <h1>{notFound ? "Page not found" : "Something went wrong"}</h1>
          <p>
            {notFound
              ? "This page doesn't exist."
              : "This page couldn't load. Try refreshing it."}
          </p>
          <Link to="/" className="link-arrow">
            Go to the home page
          </Link>
        </main>
      </div>
    </div>
  );
}

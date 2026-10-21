import "./app.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { ContextProvider } from "./context";
import ReactGA from "react-ga4";
// import Hotjar from '@hotjar/browser';

const GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
// const HOTJAR_SITE_ID = process.env.REACT_APP_HOTJAR_SITE_ID;

if (process.env.NODE_ENV === "production") {
  if (GOOGLE_ANALYTICS_ID) ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  // if(HOTJAR_SITE_ID) {
  //   const hotjarVersion = 6;
  //   Hotjar.init(HOTJAR_SITE_ID, hotjarVersion);
  // }
}

const THEME_KEY = "theme";
const THEME_BACKGROUNDS = { light: "#fbfaf8", dark: "#121417" };

// A saved choice wins; otherwise follow the visitor's system setting.
function getInitialIsLight() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved === "light";
  } catch (e) {}
  return !window.matchMedia?.("(prefers-color-scheme: dark)").matches;
}

function App() {
  const [isLight, setIsLight] = useState(getInitialIsLight);

  useEffect(() => {
    const theme = isLight ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
    // Keeps overscroll areas and the mobile browser bar in the page's colour
    document.body.style.backgroundColor = THEME_BACKGROUNDS[theme];
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_BACKGROUNDS[theme]);
  }, [isLight]);

  return (
    <div className="app" id={isLight ? "light" : "dark"}>
      <div className="container">
        <ContextProvider value={{ isLight, setIsLight }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="docs" element={<Docs />} />
            <Route path="blog" element={<Articles />} />
            {/* <Route path="projects" element={<Projects />} /> */}
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Socials />
          <Footer />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import Hero from "../components/Hero";
import DocCaseStudy from "../components/DocCaseStudy";
import DocsTooling from "../components/DocsTooling";
import { docsProjects } from "../data/docs";

// Every documentation project, in full. The home page shows only a few.
function Docs() {
  useEffect(() => {
    document.title = "Documentation projects | Taminoturoko Briggs";

    // Honour links such as /docs#maritime; otherwise start at the top
    const target =
      window.location.hash &&
      document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="docsPage">
      <Hero text1="Docs" text2="Documentation projects" />

      <div className="wrapper">
        <p className="docsPage__intro">
          API references, quickstarts, guides and the reports behind them.
          Each project links to the docs themselves, so you can read the work,
          not just a description of it.
        </p>

        <nav className="docsPage__toc" aria-label="Projects on this page">
          <span className="docsPage__tocLabel">On this page</span>
          <ul>
            {docsProjects.map((project) => (
              <li key={project.id}>
                <a href={`#${project.id}`}>{project.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="docs__list">
          {docsProjects.map((project) => (
            <DocCaseStudy key={project.id} project={project} />
          ))}
        </div>

        <DocsTooling />
      </div>
    </div>
  );
}

export default Docs;

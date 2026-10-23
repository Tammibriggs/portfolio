import Hero from "../components/Hero";
import DocCaseStudy from "../components/DocCaseStudy";
import DocsTooling from "../components/DocsTooling";
import { docsProjects } from "../data/docs";
import { pageMeta } from "../utils/meta";

export const meta = () =>
  pageMeta({
    title: "Documentation projects | Taminoturoko Briggs",
    description:
      "API references, quickstarts and guides by Taminoturoko Briggs, each with links to the docs themselves.",
    path: "/docs",
  });

// Every documentation project, in full. The home page shows only a few.
function Docs() {
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

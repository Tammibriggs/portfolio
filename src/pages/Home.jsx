import "../styles/home.css";
import HomeIntro from "../components/HomeIntro";
import SectionHeader from "../components/SectionHeader";
import DocCaseStudy from "../components/DocCaseStudy";
import DocsTooling from "../components/DocsTooling";
import ArticleRow from "../components/ArticleRow";
import About from "../components/About";
import Work from "../components/Work";
import { Link } from "react-router";
import Email from "../components/Email";
import Experience from "../components/Experience";
import projects from "../data/projects";
import { docsProjects, getHomeDocsProjects } from "../data/docs";
import { newestArticles } from "../utils/articles";
import { pageMeta } from "../utils/meta";

export const meta = () =>
  pageMeta({
    title: "Taminoturoko Briggs | Technical writer for APIs and developer tools",
    description:
      "Taminoturoko Briggs is a technical writer for APIs and developer tools. API references, quickstarts and tutorials, published in LogRocket, CSS-Tricks and SitePoint.",
    path: "/",
  });

const ARTICLES_SHOWN = 5;
const DOCS_SHOWN = 2;

function Home() {
  const homeDocs = getHomeDocsProjects(DOCS_SHOWN);
  const hiddenDocsCount = docsProjects.length - homeDocs.length;

  const articles = newestArticles().slice(0, ARTICLES_SHOWN);

  return (
    <div className="home">
      <HomeIntro />

      <section className="section wrapper" id="docs">
        <SectionHeader
          index="01"
          label="Docs work"
          title="Documentation projects"
          intro="Docs I wrote and tested myself. Each project links to the docs, so you can read the work, not just a description of it."
        />
        <div className="docs__list">
          {homeDocs.map((project) => (
            <DocCaseStudy key={project.id} project={project} />
          ))}
        </div>
        {hiddenDocsCount > 0 && (
          <div className="docs__more">
            <Link to="/docs" className="link-arrow">
              See all {docsProjects.length} docs projects
            </Link>
          </div>
        )}

        <DocsTooling />
      </section>

      <section className="section wrapper" id="articles">
        <SectionHeader
          index="02"
          label="Writing"
          title="Articles and tutorials"
          intro="Tutorials and guides I’ve written for developer publications."
        />
        <ul className="articleList">
          {articles.map((article) => (
            <ArticleRow
              key={article.link}
              title={article.title}
              link={article.link}
              publishedDate={article.publishedDate}
              summary={article.summary}
              tags={article.tags}
            />
          ))}
        </ul>
        <div className="articleList__more">
          <Link to="/blog" className="link-arrow">
            See all articles
          </Link>
        </div>
      </section>

      <Experience />

      <section className="section wrapper" id="software">
        <SectionHeader
          index="04"
          label="Engineering"
          title="I also build software"
          intro="A few projects from my work as a developer."
        />
        <div className="works__list">
          {projects.map((project) => (
            <Work
              key={project.name}
              image={project.image}
              video={project.video}
              name={project.name}
              description={project.description}
              gitHubLink={project.githubLink}
              projectLink={project.projectLink}
              techIcons={project.techIcons}
            />
          ))}
        </div>
      </section>

      <section className="section wrapper" id="about">
        <SectionHeader index="05" label="About" title="About me" />
        <About />
      </section>

      <section className="section wrapper" id="contact">
        <SectionHeader
          index="06"
          label="Contact"
          title="Get in touch"
          intro="Contact me if you’re hiring a technical writer, need docs or a tutorial written, or just want to say hi!"
        />
        <Email />
      </section>
    </div>
  );
}

export default Home;

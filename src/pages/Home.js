import "../styles/home.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Article from "../components/Article";
import { Link } from "react-router-dom";
import { useContextValue } from "../context";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Email from "../components/Email";

const LIST_FEATURED_PROJECTS = gql`
  query ListFeaturedProjects($where: DeployedProjectListWhereInput) {
    listDeployedProjects(where: $where) {
      data {
        image
        name
        description
        githubLink
        projectLink
        techIcons {
          dark
          light
        }
      }
    }
  }
`;

const LIST__ARTICLES = gql`
  query ListArticles($limit: Int) {
    listFeaturedHomeArticles(limit: $limit, sort: createdOn_DESC) {
      data {
        image
        topic
        publishedDate
        tag
        summary
        link
      }
    }
  }
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Home() {
  let arr = [2];
  const { isLight } = useContextValue();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [projects, setProjects] = useState(null);
  const [articles, setArticles] = useState(null);
  const [articlesLength, setArticlesLength] = useState(2);

  const { data } = useQuery(LIST_FEATURED_PROJECTS, {
    variables: {
      where: { featured: true },
    },
  });

  const { data: articlesData } = useQuery(LIST__ARTICLES, {
    variables: {
      limit: 3,
    },
  });

  useEffect(() => {
    document.title =
      "Taminoturoko Briggs | React Devevloper & Technical writer";
  }, []);

  useEffect(() => {
    function handleResize() {
      const windowDimensions = getWindowDimensions();
      const articlesLength =
        windowDimensions.width > 550 && windowDimensions.width < 1024 ? 2 : 3;
      setArticlesLength(articlesLength);
      setWindowDimensions(windowDimensions);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (data) {
      setProjects(data.listDeployedProjects.data);
    }
  }, [data]);

  useEffect(() => {
    if (articlesData) {
      const articles = articlesData.listFeaturedHomeArticles.data;
      setArticles(articles.slice(0, articlesLength));
    }
  }, [articlesLength, articlesData]);

  return (
    <div className="home">
      <Hero
        text1="👋🏾 Hey, my name is Taminoturoko Briggs, I’m a"
        text2="Software developer & Technical writer"
      />
      <div className="wrapper home__about">
        <h2 className="section-heading">About me</h2>
        <About />
      </div>
      <a
        className="autodoc-card"
        href="https://dev.to/tammibriggs/automate-doc-maintenance-detect-and-update-outdated-docs-using-algolia-mcp-server-n8n-and-llm-5bf7"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Emoji Section */}
        <div className="emoji-wrapper">
          <span className="autodoc-card-emoji" role="img" aria-label="Trophy">
            🏆
          </span>
        </div>

        {/* Content Section */}
        <div className="autodoc-card-content">
          <h2 className="autodoc-card-title">
            AutoDoc: Keep Docs in sync with code changes
          </h2>
          <p className="autodoc-card-desc">
            <span>Algolia MCP Server Challenge</span>
            <span className="desc-separator"></span>
            <span>July 27</span>
          </p>
        </div>
      </a>
      <div className="works wrapper">
        <h2 className="section-heading">Things I’ve built</h2>
        <p>Here are some of my featured projects</p>
        {projects ? (
          <>
            <div className="works__list">
              {projects.slice(0, 2).map((project, i) => (
                <Work
                  key={i}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  gitHubLink={project.githubLink}
                  projectLink={project.projectLink}
                  techIcons={project.techIcons}
                />
              ))}
            </div>

            <span className="viewMore">
              View more
              <img src="/assets/arrow-up-right.png" alt="arrow" />
            </span>
          </>
        ) : (
          <span className="loader loader--mod"></span>
        )}
      </div>
      <div className="articles wrapper">
        <h2 className="section-heading">Articles I've written</h2>
        <p>Browse through my featured collection of articles</p>
        {articles ? (
          <>
            <div className="articles__list">
              {articles.map((article, i) => {
                let reduceTop = false;
                arr.push(arr[i] + 3);
                if (arr.includes(i + 1)) reduceTop = true;
                else reduceTop = false;
                return (
                  <Article
                    key={i}
                    image={article.image}
                    publishedDate={article.publishedDate}
                    tags={article.tag}
                    title={article.topic}
                    reduceTop={reduceTop} //  Makes article list look wavey
                    description={article.summary}
                    link={article.link}
                  />
                );
              })}
            </div>
            <Link to="blog" className="viewMore">
              View more
              {isLight ? (
                <img src="/assets/arrow-up-right.png" alt="arrow" />
              ) : (
                <img src="/assets/up-right-arrow-light.png" alt="arrow" />
              )}
            </Link>
          </>
        ) : (
          <span className="loader loader--mod"></span>
        )}
      </div>
      <div className="wrapper" style={{ maxWidth: "800px" }}>
        <h2 className="section-heading">Get in touch</h2>
        <p>
          Feel free to contact me if you want to work on a project, have a
          content proposal or just to say hi!
        </p>
        <Email />
      </div>
    </div>
  );
}

export default Home;

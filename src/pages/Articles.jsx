import "../styles/articles.css";
import Article from "../components/Article";
import Hero from "../components/Hero";
import Search from "../components/Search";
import { useEffect, useMemo, useState } from "react";
import Filter from "../components/Filter";
import Testimonial from "../components/Testimonial";
import { newestArticles } from "../utils/articles";
import { pageMeta } from "../utils/meta";

export const meta = () =>
  pageMeta({
    title: "Articles | Taminoturoko Briggs",
    description:
      "Tutorials and guides by Taminoturoko Briggs for LogRocket, CSS-Tricks, SitePoint, ButterCMS and other developer publications.",
    path: "/blog",
  });

// Every article, newest first. Search, the filters and "Load more" all work
// on this whole list.
const allArticles = newestArticles();

// The three marked "featured": true in src/data/articles.json
const featuredArticles = allArticles.filter((article) => article.featured).slice(0, 3);

const PAGE_SIZE = 6;

// Case-insensitive match on the title, summary and tags
function matchesSearch(article, search) {
  if (!search) return true;
  return [article.title, article.summary, ...(article.tags || [])]
    .filter(Boolean)
    .some((text) => text.toLowerCase().includes(search));
}

// True if nothing is chosen, or the article has at least one chosen value
function hasAny(values, chosen) {
  return !chosen.length || (values || []).some((value) => chosen.includes(value));
}

const testimonials = [
  {
    text: `Throughout the 4 articles you wrote for Webiny, your output was consistent and thorough. 
    You delivered 4 different articles, each in a timely manner and without needing much support from the team.`,
    name: "Benjamin Read",
    image: "/assets/testimonials/benjamin-read.webp",
    position: "Formerly in Developer Relations at Webiny",
  },
  {
    text: `I have worked with Taminoturoko as an editor at the LogRocket blog for a little over a year. 
    In that time period, he has written 6 blog posts for us centered around React. His articles are always thorough and well-written, 
    receiving positive feedback in the comments section from our readers.`,
    name: "Elena Allison",
    image: "/assets/testimonials/elena-allison.webp",
    position: "Former Content Editor at LogRocket",
  },
];

function Articles() {
  let arr = [2];
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const [searchValue, setSearchValue] = useState("");
  const [languages, setLanguagues] = useState([]);
  const [frameworks, setFrameworks] = useState([]);

  // function that runs when the "All" filter option is clicked
  const displayAll = () => {
    setSearchValue("");
    setLanguagues([]);
    setFrameworks([]);
  };

  // Search and filter across every article, not just the ones shown so far
  const search = searchValue.trim().toLowerCase();
  const matching = useMemo(
    () =>
      allArticles.filter(
        (article) =>
          matchesSearch(article, search) &&
          hasAny(article.language, languages) &&
          hasAny(article.tags, frameworks)
      ),
    [search, languages, frameworks]
  );
  const shownArticles = matching.slice(0, visibleCount);

  // Start from the first page again whenever the search or filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, languages, frameworks]);

  return (
    <div className="articles">
      <Hero text1="Articles" text2="A collection of articles I’ve written">
        <div className="articles__testimonials">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              text={testimonial.text}
              author={testimonial.name}
              authorImg={testimonial.image}
              position={testimonial.position}
            />
          ))}
        </div>
      </Hero>
      <div className="wrapper">
        <h2 className="section-heading">Featured articles</h2>
        <p>Here are some of my recently featured articles</p>
        {featuredArticles.length > 0 && (
          <div className="featured__list">
            <Article
              variant="feature"
              link={featuredArticles[0].link}
              image={featuredArticles[0].image}
              publishedDate={featuredArticles[0].publishedDate}
              tags={featuredArticles[0].tags}
              title={featuredArticles[0].title}
              description={featuredArticles[0].summary}
            />
            {featuredArticles.length > 1 && (
              <div className="featured__rest">
                {featuredArticles.slice(1).map((article) => (
                  <Article
                    key={article.link}
                    link={article.link}
                    image={article.image}
                    publishedDate={article.publishedDate}
                    tags={article.tags}
                    title={article.title}
                    description={article.summary}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="wrapper">
        <h2 className="section-heading">All articles</h2>
        <p>Browse through all my articles</p>
        <div className="searchNfilter">
          <Search value={searchValue} setState={setSearchValue} />
          <Filter
            displayAll={displayAll}
            languages={languages}
            setLanguagues={setLanguagues}
            frameworks={frameworks}
            setFrameworks={setFrameworks}
          />
        </div>
        {shownArticles.length === 0 && (
          <p className="articles__empty">
            {search
              ? `No articles match “${searchValue.trim()}”.`
              : "No articles match these filters."}
          </p>
        )}
        <div className="articles__list">
          {shownArticles.map((article, i) => {
            let reduceTop = false;
            arr.push(arr[i] + 3);
            if (arr.includes(i + 1)) reduceTop = true;
            // else reduceTop = false;
            return (
              <Article
                key={article.link}
                reduceTop={reduceTop} //  Makes article list look wavey
                image={article.image}
                publishedDate={article.publishedDate}
                tags={article.tags}
                title={article.title}
                description={article.summary}
                link={article.link}
              />
            );
          })}
        </div>
        {visibleCount < matching.length && (
          <button
            className="loadMore"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}

export default Articles;

import "../styles/article.css";
import { formatMonth, getPublication } from "../utils/articles";

// variant="feature": the wide card at the top of the Articles page
function Article({
  variant,
  link,
  image,
  publishedDate,
  tags = [],
  title,
  description,
  reduceTop,
}) {
  const publication = getPublication(link);

  return (
    <article
      className={`article ${variant === "feature" ? "article--feature" : ""} ${
        reduceTop ? "article--offset" : ""
      }`}
    >
      {/* The cover is drawn by CSS (article.css) from --cover */}
      <div style={{ "--cover": `url("${image}")` }} className="article__img" />
      <div className="article__desc">
        <span className="article__meta">
          {publication && <strong>{publication}</strong>}
          <time dateTime={publishedDate}>{formatMonth(publishedDate)}</time>
        </span>
        <h2>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <div className="article__tags">
          {tags.filter(Boolean).map((tag) => (
            <span key={tag} className="chip">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Article;

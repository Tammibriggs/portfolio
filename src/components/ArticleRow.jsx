import "../styles/articleRow.css";
import { formatMonth, getPublication } from "../utils/articles";

// One article in the home page's index-style list.
function ArticleRow({ title, link, publishedDate, summary, tags = [] }) {
  const publication = getPublication(link);

  return (
    <li className="articleRow">
      <time className="articleRow__date" dateTime={publishedDate}>
        {formatMonth(publishedDate)}
      </time>
      <div className="articleRow__body">
        <h3>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <p>{summary}</p>
        <div className="articleRow__meta">
          {publication && <span className="articleRow__pub">{publication}</span>}
          {tags.filter(Boolean).map((tag) => (
            <span key={tag} className="chip">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default ArticleRow;

import "../styles/docs.css";

function ToolCard({ tool }) {
  return (
    <article className={`toolCard ${tool.highlight ? "toolCard--highlight" : ""}`}>
      <div className="toolCard__media">
        {tool.video ? (
          <video
            src={tool.video}
            poster={tool.image}
            muted
            playsInline
            controls
            preload="none"
            aria-label={`${tool.name} demo video`}
          />
        ) : tool.image ? (
          <img src={tool.image} alt="" loading="lazy" />
        ) : (
          <span className="toolCard__trophy" aria-hidden="true">
            🏆
          </span>
        )}
      </div>
      <div className="toolCard__body">
        <span className="toolCard__badge">{tool.badge}</span>
        <h4>{tool.name}</h4>
        <p>{tool.description}</p>
        <div className="toolCard__links">
          {tool.links.map((link) => (
            <a
              key={link.href}
              className="link-arrow"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ToolCard;

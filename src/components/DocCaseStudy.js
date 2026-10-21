import { useState } from "react";
import "../styles/docs.css";

function hostname(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return url;
  }
}

// Load the other tab's image before it's shown, so switching doesn't flash
function preload(src) {
  const img = new Image();
  img.src = src;
}

function DocCaseStudy({ project }) {
  const titleId = `${project.id}-title`;
  const [showBefore, setShowBefore] = useState(false);
  const before = project.before;

  const shot = showBefore
    ? { ...before, label: "Open the original docs in a new tab" }
    : {
        image: project.image,
        imageAlt: project.imageAlt,
        caption: project.caption,
        url: project.url,
        label: `Open ${project.name} in a new tab`,
      };

  return (
    <article className="caseStudy" id={project.id} aria-labelledby={titleId}>
      <div className="caseStudy__top">
        <div className="caseStudy__intro">
          <span className="caseStudy__kind">{project.kind}</span>
          <h3 id={titleId}>{project.name}</h3>
          <p className="caseStudy__summary">{project.summary}</p>
        </div>

        <div className="caseStudy__media">
          {before && (
            <div className="shotToggle" role="group" aria-label="Screenshot">
              <button
                type="button"
                aria-pressed={showBefore}
                onClick={() => setShowBefore(true)}
                onPointerEnter={() => preload(before.image)}
                onFocus={() => preload(before.image)}
              >
                Before
              </button>
              <button
                type="button"
                aria-pressed={!showBefore}
                onClick={() => setShowBefore(false)}
              >
                After
              </button>
            </div>
          )}

          <a
            className="caseStudy__shot"
            href={shot.url}
            target="_blank"
            rel="noreferrer"
            aria-label={shot.label}
          >
            <div className="browserFrame">
              <div className="browserFrame__bar" aria-hidden="true">
                <span className="browserFrame__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="browserFrame__url">{hostname(shot.url)}</span>
              </div>
              <img src={shot.image} alt={shot.imageAlt} loading="lazy" />
            </div>
          </a>

          {shot.caption && (
            <p className="caseStudy__caption" aria-live="polite">
              {shot.caption}
            </p>
          )}
        </div>
      </div>

      <dl className="caseStudy__facts">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>What I did</dt>
          <dd>{project.work}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>{project.result}</dd>
        </div>
      </dl>

      <div className="caseStudy__deliverables">
        <h4>Read the docs</h4>
        <ul>
          {project.deliverables.map((item) => (
            <li key={item.type}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <span className="deliverable__type">
                  {item.type}
                  <span className="deliverable__arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>
                <span className="deliverable__desc">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="caseStudy__footer">
        <div className="caseStudy__tools">
          {project.tools.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>
        <a
          className="link-arrow"
          href={project.sourceLink}
          target="_blank"
          rel="noreferrer"
        >
          Source on GitHub
        </a>
      </div>
    </article>
  );
}

export default DocCaseStudy;

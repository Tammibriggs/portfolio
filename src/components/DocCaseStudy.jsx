import { useState } from "react";
import "../styles/docs.css";
import ScreenshotViewer from "./ScreenshotViewer";

function hostname(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return url;
  }
}

// Below this width the card is one column and shows the phone-sized screenshot
const NARROW = "(max-width: 899px)";

// Load the other tab's image before it's shown, so switching doesn't flash.
// The viewer always shows the wide image.
function preload(shot, wide = false) {
  const narrow = !wide && window.matchMedia?.(NARROW).matches;
  const img = new Image();
  img.src = narrow && shot.imageMobile ? shot.imageMobile : shot.image;
}

function ShotToggle({ before, showBefore, setShowBefore, wide }) {
  return (
    <div className="shotToggle" role="group" aria-label="Screenshot">
      <button
        type="button"
        aria-pressed={showBefore}
        onClick={() => setShowBefore(true)}
        onPointerEnter={() => preload(before, wide)}
        onFocus={() => preload(before, wide)}
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
  );
}

const ExpandIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

function DocCaseStudy({ project }) {
  const titleId = `${project.id}-title`;
  const [showBefore, setShowBefore] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const before = project.before;

  const shot = showBefore
    ? { ...before, label: "Open the original docs in a new tab" }
    : {
        image: project.image,
        imageMobile: project.imageMobile,
        imageAlt: project.imageAlt,
        caption: project.caption,
        url: project.url,
        label: `Open ${project.name} in a new tab`,
      };

  const toggleProps = { before, showBefore, setShowBefore };

  return (
    <article className="caseStudy" id={project.id} aria-labelledby={titleId}>
      <div className="caseStudy__top">
        <div className="caseStudy__intro">
          <span className="caseStudy__kind">{project.kind}</span>
          <h3 id={titleId}>{project.name}</h3>
          <p className="caseStudy__summary">{project.summary}</p>
        </div>

        <div className="caseStudy__media">
          {before && <ShotToggle {...toggleProps} />}

          <div className="browserFrame">
            <div className="browserFrame__bar">
              <span className="browserFrame__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <a
                className="browserFrame__url"
                href={shot.url}
                target="_blank"
                rel="noreferrer"
                aria-label={shot.label}
              >
                <span>{hostname(shot.url)}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <button
              type="button"
              className="browserFrame__expand"
              onClick={() => {
                preload(shot, true);
                setViewerOpen(true);
              }}
              aria-label={`Expand screenshot: ${shot.imageAlt}`}
            >
              {/* key: a new element per tab, so the browser picks the
                  source again when the tab changes */}
              <picture key={shot.image}>
                {shot.imageMobile && (
                  <source media={NARROW} srcSet={shot.imageMobile} />
                )}
                <img src={shot.image} alt="" loading="lazy" decoding="async" />
              </picture>
              <span className="browserFrame__hint" aria-hidden="true">
                <ExpandIcon />
                Expand
              </span>
            </button>
          </div>

          {shot.caption && (
            <p className="caseStudy__caption" aria-live="polite">
              {shot.caption}
            </p>
          )}
        </div>
      </div>

      <ScreenshotViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={project.name}
        shot={shot}
        linkText={`Open ${hostname(shot.url)}`}
        toggle={before && <ShotToggle {...toggleProps} wide />}
      />

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

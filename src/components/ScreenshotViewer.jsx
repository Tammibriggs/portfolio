import { useEffect, useId, useRef } from "react";
import "../styles/viewer.css";

// A case study's screenshot at full size, in a modal <dialog>.
// The browser handles Escape, keeps focus inside, and returns focus on close.
function ScreenshotViewer({ open, onClose, title, shot, linkText, toggle }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Stop the page behind from scrolling while the viewer is open
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="viewer"
      aria-labelledby={titleId}
      onClose={onClose}
      // A click outside the panel lands on the dialog itself, over the backdrop
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className="viewer__panel">
        <div className="viewer__bar">
          <h2 id={titleId} className="viewer__title">
            {title}
          </h2>
          {toggle}
          <a
            className="viewer__open"
            href={shot.url}
            target="_blank"
            rel="noreferrer"
          >
            {linkText} <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={closeRef}
            type="button"
            className="viewer__close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="viewer__scroll">
          {open && <img src={shot.image} alt={shot.imageAlt} decoding="async" />}
        </div>

        <p className="viewer__hint">
          Shown at actual size: scroll sideways to see all of it.
        </p>
        {shot.caption && <p className="viewer__caption">{shot.caption}</p>}
      </div>
    </dialog>
  );
}

export default ScreenshotViewer;

import { useEffect, useRef, useState } from "react";
import "../styles/projectPreview.css";

const LOAD_TIMEOUT_MS = 4000;

function ProjectPreview({ project, onClose }) {
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [iframeFailed, setIframeFailed] = useState(false);
    const sheetRef = useRef(null);
    const dragStartY = useRef(null);
    const dragCurrentY = useRef(0);

    // Fallback if the site refuses to render in an iframe (X-Frame-Options / CSP).
    // onLoad still fires even when blocked, so we can't detect this with total
    // certainty — treat "no load event within N seconds" as a signal to fail.
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!iframeLoaded) setIframeFailed(true);
        }, LOAD_TIMEOUT_MS);
        return () => clearTimeout(timer);
    }, [iframeLoaded]);

    // Dismiss on Escape
    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    // Swipe-to-dismiss (touch), only meaningfully active on the mobile sheet
    function handleTouchStart(e) {
        dragStartY.current = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (dragStartY.current === null) return;
        const delta = e.touches[0].clientY - dragStartY.current;
        if (delta > 0) {
            dragCurrentY.current = delta;
            if (sheetRef.current) {
                sheetRef.current.style.transform = `translateY(${delta}px)`;
            }
        }
    }

    function handleTouchEnd() {
        if (dragCurrentY.current > 120) {
            onClose();
        } else if (sheetRef.current) {
            sheetRef.current.style.transform = "";
        }
        dragStartY.current = null;
        dragCurrentY.current = 0;
    }

    return (
        <div className="preview__backdrop" onClick={onClose}>
            <div
                className="preview__sheet"
                ref={sheetRef}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="preview__handle" onClick={onClose}></div>

                <div className="preview__header">
                    <h3>{project.name}</h3>
                    <div className="preview__headerActions">
                        <a
                            href={project.projectLink}
                            target="_blank"
                            rel="noreferrer"
                            className="preview__openNew"
                        >
                            Open in new tab
                        </a>
                        <button
                            className="preview__close"
                            onClick={onClose}
                            aria-label="Close preview"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div className="preview__frameWrap">
                    {!iframeFailed && (
                        <iframe
                            title={project.name}
                            src={project.projectLink}
                            className="preview__iframe"
                            onLoad={() => setIframeLoaded(true)}
                            style={{ opacity: iframeLoaded ? 1 : 0 }}
                        />
                    )}

                    {!iframeLoaded && !iframeFailed && (
                        <div className="preview__loading">Loading preview…</div>
                    )}

                    {iframeFailed && (
                        <div className="preview__fallback">
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="preview__fallbackImage"
                                />
                            )}
                            <p>This project can't be shown here.</p>
                            <a
                                href={project.projectLink}
                                target="_blank"
                                rel="noreferrer"
                                className="preview__fallbackLink"
                            >
                                Open {project.name} directly →
                            </a>
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
}

export default ProjectPreview;
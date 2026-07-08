import { useEffect, useRef } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce";

function Hackathon() {
  const [stageRef, stageInView] = useInViewOnce({ threshold: 0.15 });
  const rowRef = useRef(null);
  const trophySlotRef = useRef(null);

  // Keeps stageRef (used by useInViewOnce to observe scroll position)
  // and rowRef (used here to measure real widths) pointed at the same node.
  const setRowNode = (node) => {
    stageRef.current = node;
    rowRef.current = node;
  };

  useEffect(() => {
    function measure() {
      if (!rowRef.current || !trophySlotRef.current) return;

      const isStacked = window.matchMedia("(max-width: 640px)").matches;
      if (isStacked) {
        rowRef.current.style.setProperty("--hackathon-offset", "0px");
        return;
      }

      // Center the trophy within the row's true rendered width, whatever
      // that width actually is at the current screen size — no assumptions.
      const rowWidth = rowRef.current.offsetWidth;
      const trophyWidth = trophySlotRef.current.offsetWidth;
      const offset = (rowWidth - trophyWidth) / 2;
      rowRef.current.style.setProperty("--hackathon-offset", `${offset}px`);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <a
      href="https://dev.to/tammibriggs/automate-doc-maintenance-detect-and-update-outdated-docs-using-algolia-mcp-server-n8n-and-llm-5bf7"
      target="_blank"
      rel="noopener noreferrer"
      className="wrapper hackathon hackathon--link"
    >
      <div
        ref={setRowNode}
        className={`hackathon__row ${stageInView ? "hackathon__row--in-view" : ""
          }`}
      >
        <div className="hackathon__trophy-slot" ref={trophySlotRef}>
          <span className="hackathon__trophy" aria-hidden="true">
            🏆
          </span>
        </div>
        <div className="hackathon__text">
          <div className="hackathon__badges">
            <span className="hackathon__badge hackathon__badge--winner">Winner</span>
            <span className="hackathon__badge hackathon__badge--muted">
              AI agent
            </span>
          </div>
          <h3 className="hackathon__project">AutoDoc</h3>
          <p className="hackathon__event">Algolia MCP Server Challenge</p>
          <p className="hackathon__description">
            An AI agent that analyzes recent code commits, detects affected documentation pages,
            and suggests updates, ensuring your documentation stays up-to-date.
          </p>
        </div>
      </div>
    </a>
  );
}

export default Hackathon;
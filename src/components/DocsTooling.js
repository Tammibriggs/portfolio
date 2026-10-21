import "../styles/docs.css";
import ToolCard from "./ToolCard";
import { docsTooling } from "../data/docs";

// The "tools I built to keep docs accurate" block, on the home and Docs pages.
function DocsTooling() {
  return (
    <div className="tooling">
      <h3 className="tooling__heading">
        Also docs-related: tools I built to keep docs accurate
      </h3>
      <div className="tooling__list">
        {docsTooling.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default DocsTooling;

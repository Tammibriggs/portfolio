// Numbered section heading for the home page: "01 / Docs work", then the title.
function SectionHeader({ index, label, title, intro }) {
  return (
    <div className="sectionHeader">
      <span className="section-label">
        <span className="section-label__index">{index}</span>
        {label}
      </span>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export default SectionHeader;

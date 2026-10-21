import "../styles/experience.css";
import experienceData from "../data/experience";
import { useInViewOnce } from "../hooks/useInViewOnce";
import SectionHeader from "./SectionHeader";

// One role, laid out like a changelog entry: the date on the left, notes on the right.
function ChangelogEntry({ item }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.1 });

  return (
    <li
      ref={ref}
      className={`changelog__entry ${inView ? "changelog__entry--in-view" : ""}`}
    >
      <span className="changelog__period">{item.period}</span>
      <div className="changelog__body">
        <div className="changelog__head">
          {item.logo && (
            <span className="changelog__logo">
              <img src={item.logo} alt="" />
            </span>
          )}
          <div>
            <h3>{item.role}</h3>
            <span className="changelog__company">{item.company}</span>
          </div>
        </div>
        <ul className="changelog__notes">
          {item.description.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
        <div className="changelog__tags">
          {item.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

function Experience() {
  return (
    <section className="section wrapper" id="experience">
      <SectionHeader
        index="03"
        label="Experience"
        title="Work experience"
        intro="Where I’ve written docs, articles and code."
      />
      <ol className="changelog">
        {experienceData.map((item) => (
          <ChangelogEntry key={`${item.company}-${item.role}`} item={item} />
        ))}
      </ol>
    </section>
  );
}

export default Experience;

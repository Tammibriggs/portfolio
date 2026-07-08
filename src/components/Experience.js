import "../styles/experience.css";
import experienceData from "../data/experience";
import { useInViewOnce } from "../hooks/useInViewOnce";

function TimelineItem({ item }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`timeline__item ${inView ? "timeline__item--in-view" : ""}`}
    >
      <div className="timeline__marker">
        <div className="timeline__node" aria-hidden="true">
          {item.logo && (
            <img src={item.logo} alt={item.company} className="timeline__logo" />
          )}
        </div>
      </div>
      <div className="timeline__card">
        <div className="timeline__header">
          <span className="timeline__period">{item.period}</span>
          <h3 className="timeline__role">{item.role}</h3>
          <h4 className="timeline__company">{item.company}</h4>
        </div>
        <ul className="timeline__description">
          {item.description.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
        <div className="timeline__tags">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="timeline__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience wrapper">
      <h2 className="section-heading">Work Experience</h2>
      <p>A history of my professional roles and technical contributions</p>

      <div className="timeline">
        {experienceData.map((item, i) => (
          <TimelineItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Experience;

import "../styles/about.css";

// Tools I've used on the docs projects above
const docsToolkit = [
  "OpenAPI",
  "Scalar",
  "Redocly CLI",
  "Markdown",
  "Agent Skills",
  "Git and GitHub",
];

const languagesAndFrameworks = [
  "TypeScript",
  "Python",
  "Next.js",
  "Express.js",
  "FastAPI",
  "LangGraph",
];

function About() {
  return (
    <div className="about">
      <div className="about__desc">
        <p>
          Back in the day, I had this trusty junk bag where I kept my most
          precious treasures: carton, rotors, wires, and other random parts I
          used to build interesting things. I made projects like a remote
          controlled car and even a helicopter that, unfortunately, never got
          off the ground. It was fun!
        </p>
        <p>
          Today, I put that same curiosity into understanding how software works
          and explaining it clearly. Over the past 5+ years, I've worked as both
          a developer and a technical writer. Now I focus on developer docs: API
          references, quickstarts and tutorials.
        </p>
      </div>

      <aside className="about__glance" aria-label="Tools and languages">
        <h3>Docs toolkit</h3>
        <div className="about__chips">
          {docsToolkit.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>

        <h3>Languages and frameworks</h3>
        <div className="about__chips">
          {languagesAndFrameworks.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default About;

import "../styles/intro.css";
import { publications } from "../data/docs";

function HomeIntro() {
  return (
    <section className="intro wrapper">
      <div className="intro__grid">
        <div className="intro__text">
          <span className="intro__greeting">👋🏾 Hi, I’m Taminoturoko Briggs</span>
          <h1>Technical writer for APIs and developer tools</h1>
          <p className="intro__lead">
            I write API references, quickstarts and tutorials, and I test what
            I document against the real API, so the examples work and every
            claim has evidence behind it. I’ve also worked as a full-stack
            developer, so I can read the code behind the docs.
          </p>
          <div className="intro__actions">
            <a href="#docs" className="btn btn--primary">
              See my docs work
            </a>
            <a href="#articles" className="btn btn--secondary">
              Read my articles
            </a>
          </div>
        </div>

        <div className="intro__photo">
          <img src="/assets/profile-pic.webp" alt="Taminoturoko Briggs" />
        </div>
      </div>

      <div className="intro__published">
        <span className="intro__publishedLabel">Articles published in</span>
        <ul>
          {publications.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeIntro;

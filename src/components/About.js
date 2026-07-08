import "../styles/about.css";
import { useContextValue } from "../context";

function About() {
  const { isLight } = useContextValue();

  const technologies = [
    {
      name: "TypeScript",
      icon: "/assets/typescript.png",
    },
    {
      name: "Python",
      icon: "/assets/python.png",
    },
    {
      name: "Next.js",
      icon: "/assets/next.png",
    },
    {
      name: "Express.js",
      icon: "/assets/express.png",
    },
    {
      name: "FastAPI",
      icon: {
        light: "/assets/fastapi-black.svg",
        dark: "/assets/fastapi-white.svg",
      },
    },
    {
      name: "Langgraph",
      icon: "/assets/langgraph.png",
    },
  ]

  return (
    <div className="about">
      <div className="about__img_container">
        <div className="about__img_background">
          <img className="about__img" src="/assets/profile-pic.webp" alt="profile" />
        </div>
      </div>
      <div className="about__desc">
        <p>
          Back in the day, I had this trusty junk bag where I kept my most precious treasures: carton, rotors, wires, and other random parts I used to build interesting things. I made projects like a remote controlled car and even a helicopter that, unfortunately, never got off the ground 😂. It was fun!
          <br /> <br />
          Today, I express that same curiosity by building websites that I find interesting, useful, and cool. Over the past 5+ years, I've grown as both a developer and a technical writer, continually learning, sharpening my skills, and exploring ideas through technical writing.

        </p>
        <h3>The Big Six</h3>
        {/* <p>Here are some of the technologies I am familiar with</p> */}
        <div className="about__techs">
          {technologies.map(({ icon, name }, i) => {
            const src =
              typeof icon === "string"
                ? icon
                : isLight
                  ? icon.light
                  : icon.dark;

            return (
              <div key={i}>
                <img src={src} alt={name} />
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;

import "../styles/about.css";
import { useContextValue } from "../context";

function About() {
  const { isLight } = useContextValue();

  const technologies = {
    darkIcons: [
      {
        name: "TypeScript",
        icon: "/assets/typescript.png",
      },
      {
        name: "React",
        icon: "/assets/react-light.png",
      },
      {
        name: "NextJs",
        icon: "/assets/next.png",
      },
      {
        name: "Redux",
        icon: "/assets/redux.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/assets/tailwind.png",
      },
    ],
    lightIcons: [
      {
        name: "TypeScript",
        icon: "/assets/typescript.png",
      },
      {
        name: "React",
        icon: "/assets/react.png",
      },
      {
        name: "NextJs",
        icon: "/assets/next.png",
      },
      {
        name: "Redux",
        icon: "/assets/redux.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/assets/tailwind.png",
      },
    ],
  };

  return (
    <div className="about">
      <div>
        <img src="/assets/portfolio-img.jpg" alt="profile" />
        <div className="about__desc">
          <p>
            I’m passionate about solving problems, building impactful projects,
            and personal growth. I push past my limit when necessary to get the
            job done because I believe results speak louder than words. I am
            constantly learning and improving to build up the skills and
            knowledge needed to develop innovative projects and solve real-world
            problems.
          </p>
          <h3>Favorite technologies</h3>
          <p>Here are my favorite technologies and tools right now</p>
          <div className="about__techs">
            {isLight ? (
              <>
                {technologies?.lightIcons?.map((icon, i) => (
                  <div key={i}>
                    <img src={icon.icon} alt="logo" />
                    <span>{icon.name}</span>
                  </div>
                ))}
              </>
            ) : (
              <>
                {technologies?.darkIcons?.map((icon, i) => (
                  <div key={i}>
                    <img src={icon.icon} alt="logo" />
                    <span>{icon.name}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

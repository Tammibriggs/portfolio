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
        name: "Next.js",
        icon: "/assets/next.png",
      },
      {
        name: "Redux",
        icon: "/assets/redux.svg",
      },
      // {
      //   name: "Node.js",
      //   icon: "/assets/node.png",
      // },
      {
        name: "Tailwind CSS",
        icon: "/assets/tailwind.png",
      },
      {
        name: "MongoDB",
        icon: "/assets/mongoDB.png",
      },
      {
        name: "Express.js",
        icon: "/assets/express.png",
      },
      {
        name: "GraphQL",
        icon: "/assets/graphql.png",
      },
      {
        name: "Python",
        icon: "/assets/python.png",
      },
      {
        name: "Firebase",
        icon: "/assets/firebase.png",
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
        name: "Next.js",
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
      {
        name: "MongoDB",
        icon: "/assets/mongoDB.png",
      },
      {
        name: "Express.js",
        icon: "/assets/express.png",
      },
      {
        name: "GraphQL",
        icon: "/assets/graphql.png",
      },
      {
        name: "Python",
        icon: "/assets/python.png",
      },
      {
        name: "Firebase",
        icon: "/assets/firebase.png",
      },
    ],
  };

  return (
    <div className="about">
      <div>
        <img src="/assets/portfolio-img.jpg" alt="profile" />
        <div className="about__desc">
          <p>
            <span style={{ fontWeight: 600 }}>Learn! Learn! Learn! Build!</span>{" "}
            That's how I spend most of my time. I'm always striving to improve
            myself, expand my skill set, and gain knowledge to develop
            innovative projects and solve real-world problems. Currently, I'm
            exploring Generative AI and Machine Learning, aiming to integrate
            these technologies with my existing skills. I'm particularly
            excited about AI's ability to solve long-standing challenges and
            enhance existing systems.
          </p>
          <h3>Technologies</h3>
          <p>Here are some of the technologies I am familiar with</p>
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

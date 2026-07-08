import "../styles/work.css";
import TechIcon from "./TechIcon";
import { useContextValue } from "../context";
import { useState } from "react";
import ProjectPreview from "./ProjectPreview";

function Work({
  image,
  video,
  name,
  description,
  gitHubLink,
  projectLink,
  techIcons = { dark: [], light: [] },
}) {
  const { isLight } = useContextValue();
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <div className="work">
      <div className="work__mediaWrap">
        {video ? (
          <video
            className="work__media work__video"
            src={video}
            // autoPlay
            // loop
            muted
            playsInline
            controls
            poster={image} // shows image while video loads / if it fails
          />
        ) : (
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="work__media work__img"
          ></div>
        )}
        {projectLink && <button
          className="work__previewButton"
          onClick={() => setPreviewOpen(true)}
          aria-label={`Preview ${name} live`}
        >
          <span>Live preview</span>
        </button>}
      </div>

      {previewOpen && projectLink && (
        <ProjectPreview
          project={{ name, image, projectLink }}
          onClose={() => setPreviewOpen(false)}
        />
      )}

      <div className="work__details">
        <h3>{name}</h3>
        <div className="work__description">
          <p>{description}</p>
        </div>
        <h4>Technologies used</h4>
        <div className="work__techs">
          {isLight && (
            <>
              {techIcons.dark.map((icon, i) => (
                <TechIcon key={i} icon={icon} />
              ))}
            </>
          )}
          {!isLight && (
            <>
              {techIcons.light.map((icon, i) => (
                <TechIcon key={i} icon={icon} />
              ))}
            </>
          )}
        </div>
        <div className="works__externalLinks">
          {isLight && (
            <>
              {gitHubLink && (
                <a href={gitHubLink} target="_blank" rel="noreferrer">
                  <img src="/assets/github.png" alt="GitHub" />
                </a>
              )}
              {projectLink && <a href={projectLink} target="_blank" rel="noreferrer">
                <img src="/assets/external-link.png" alt="external link" />
              </a>}
            </>
          )}
          {!isLight && (
            <>
              {gitHubLink && <a href={gitHubLink}>
                <img src="/assets/github-light.png" alt="GitHub" />
              </a>}
              {projectLink && <a href={projectLink}>
                <img
                  src="/assets/external-link-light.png"
                  alt="external link"
                />
              </a>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
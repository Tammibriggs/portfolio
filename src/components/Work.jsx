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
  // "dark" icons are drawn for light backgrounds, and the other way round
  const icons = isLight ? techIcons.dark : techIcons.light;

  return (
    <article className="work">
      <div className="work__mediaWrap">
        {video ? (
          <video
            className="work__media"
            src={video}
            muted
            playsInline
            controls
            preload="none"
            poster={image} // shows image while video loads / if it fails
          />
        ) : (
          <img className="work__media" src={image} alt="" loading="lazy" />
        )}
        {projectLink && (
          <button
            className="work__previewButton"
            onClick={() => setPreviewOpen(true)}
            aria-label={`Preview ${name} live`}
          >
            Live preview
          </button>
        )}
      </div>

      {previewOpen && projectLink && (
        <ProjectPreview
          project={{ name, image, projectLink }}
          onClose={() => setPreviewOpen(false)}
        />
      )}

      <div className="work__details">
        <h3>{name}</h3>
        <p className="work__description">{description}</p>
        <div className="work__techs" aria-label="Technologies used">
          {icons.map((icon) => (
            <TechIcon key={icon} icon={icon} />
          ))}
        </div>
        <div className="work__links">
          {projectLink && (
            <a className="link-arrow" href={projectLink} target="_blank" rel="noreferrer">
              Live site
            </a>
          )}
          {gitHubLink && (
            <a className="link-arrow" href={gitHubLink} target="_blank" rel="noreferrer">
              Source on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Work;

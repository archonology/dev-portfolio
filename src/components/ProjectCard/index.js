import React from "react";
import { useState } from "react";
import Image from "mui-image";
import projects from "../projects";
import UpArrow from "../UpArrow";
const ProjectCard = () => {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <>
      {projects.map((project) => {
        return (
          <div className="projBox">
            <figure id="projImgBox">
              <a 
              href={project.liveLink}
              rel="non_openner"
              target="_blank"
              aria-label={project.liveLink}
              >
              <Image
                id="folioImg"
                src={project.image}
                bgColor="black"
                alt={project.title}
                style={{ boxShadow: "9px 14px 18px -5px black" }}
                duration={5000}
                onMouseEnter={() => setShowBtn(true)}
                onTouchMove={() => setShowBtn(true)}
                onScroll={() => setShowBtn(true)}
              ></Image>
              </a>
              <figcaption style={{ marginTop: '1.5rem'}}>{project.title}</figcaption>
            </figure>
            <div id="projTextBox">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div id="techBox">
                <h3>Tech Used:</h3>
                <ul>
                  {project.techStack.map((tech) => {
                    return <li>{tech}</li>;
                  })}
                </ul>
              </div>
              <div id="linkBox">
                <h3>Links:</h3>
                <ul>
                  <li>
                    <a
                      href={project.liveLink}
                      rel="non_openner"
                      target="_blank"
                      aria-label={project.liveLink}
                    >
                      Website
                    </a>
                  </li>
                  {project.repoLink ? (
                    <li>
                      <a
                        href={project.repoLink}
                        rel="non_openner"
                        target="_blank"
                        aria-label={project.repoLink}
                      >
                        Github
                      </a>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </div>
            <UpArrow showBtn={showBtn} />
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;

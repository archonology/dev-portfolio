import React from "react";
import Image from "mui-image";
import projects from "../projects";

const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <div className="projBox">
            <div id="portraitbox">
              <Image
                id="folioImg"
                src={project.image}
                bgColor="black"
                alt={project.title}
                // style={{ width: "35svw" }}
              ></Image>
            </div>
            <div id="projTextBox">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div id="techBox">
                <ul>
                  {project.techStack.map((tech) => {
                    return <li>{tech}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;

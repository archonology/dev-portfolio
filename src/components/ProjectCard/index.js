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
                alt="portrait of Reed Meher in black and white"
                // style={{ width: "35svw" }}
              ></Image>
            </div>
            <div id="projTextBox">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;

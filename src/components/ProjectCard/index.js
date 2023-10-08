import React from "react";
import { useState } from "react";
import Image from 'mui-image';
import projects from "../projects";
// import prima from '../../images/prima-materia-home.jpg';
// import homeParty from '../../images/home-party-page.jpg'
// import wanderComma from '../../images/WanderingComma2.png';
// import nightIn from '../../images/a-night-in-page.jpg';
// import cwp from '../../images/CWP fresh screenshot Sept23.png';
// import bakpak from '../../images/BakPak2.png';


const ProjectCard = () => {

    return (
        <>
            {projects.map((project) => {
                return (
                    <>
                        <div className="proj-columns">
                            <div className="proj-card card-1" style={{lineHeight: 1.5}}>
                                <a href={project.liveLink} target={'_blank'} rel={'nonreferrer'}><Image src={project.image} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' /></a>
                                <h3>{project.title}</h3>
                                <hr />
                                <p>{project.description}</p>
                                <div className="proj-links" style={{marginBottom: '1.5em'}}>
                                    <a href={project.liveLink} target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                                    <a href={project.repoLink} target={'_blank'} rel={'nonreferrer'}>Repository</a>
                                </div>
                                <hr />
                                <p style={{ textAlign: 'center', fontSize: '15px', lineHeight: 1.6, fontWeight: 600 }}>
                              {project.techStack}
                                </p>

                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default ProjectCard;
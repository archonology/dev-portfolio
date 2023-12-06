import React from "react";
import Image from 'mui-image';
import projects from "../projects";


const ProjectCard = () => {
    return (
        <>
            {projects.map((project) => {
                return (
                    <>
                        <div className="proj-columns">
                            <div className="proj-card card-1" style={{ lineHeight: 1.5 }}>
                                <a href={project.liveLink} target={'_blank'} rel={'nonreferrer'}><Image src={project.image} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' /></a>
                                <h3>{project.title}</h3>
                                <hr />
                                <p>{project.description}</p>
                                <div className="proj-links" style={{ marginBottom: '1.1em' }}>
                                    <a href={project.liveLink} target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                                    {project.repoLink ? (<>
                                        <a href={project.repoLink} target={'_blank'} rel={'nonreferrer'}>Repository</a>
                                    </>) : (<></>)}

                                </div>
                                <hr />
                                <p style={{ textAlign: 'left', fontSize: '15px', lineHeight: 1.6, fontWeight: 600 }}>
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
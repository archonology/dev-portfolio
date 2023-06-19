import React from "react";
import Image from 'mui-image'
import prima from '../images/prima-materia-home.jpg';
import homeParty from '../images/home-party-page.jpg'
import wanderComma from '../images/wandering-comma.jpg';
import nightIn from '../images/a-night-in-page.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="portfolio-container proj1">
                <div className="container-content">
                    <p>The Child Welfare Portal</p>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                    </div>
                </div>
            </div>

            <div className="portfolio-container proj2">
                <div className="cc2">
                    <p>BakPak</p>
                    <br />
                    <hr />
                    <div className="p2-links">
                        <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                    </div>
                    <br />
                    <hr />
                    <div className="p2-links">
                        <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                    </div>
                </div>
            </div>
            <section className="projects-container">
                <div className="proj-columns">
                    <div className="proj-card card-1">
                        <Image src={prima} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>Prima-Materia</h3>
                        <hr />
                        <p>A full stack application built with React, Mongoose, Express, and Node (MERN).</p>
                        <div className="proj-links">
                            <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>

                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card">
                        <Image src={homeParty} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>Home Party</h3>
                        <hr />
                        <p>A full stack application built with React, Mongoose, Express, and Node (MERN).</p>
                        <div className="proj-links">
                            <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card">
                        <Image src={wanderComma} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>The Wandering Comma</h3>
                        <hr />
                        <p>A full stack application built with React, Mongoose, Express, and Node (MERN).</p>
                        <div className="proj-links">
                            <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card">
                        <Image src={nightIn} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>A Night In</h3>
                        <hr />
                        <p>A full stack application built with React, Mongoose, Express, and Node (MERN).</p>
                        <div className="proj-links">
                            <a href="https://www.linkedin.com/in/reed-meher" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Portfolio;
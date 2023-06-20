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
                    <h2>The Child Welfare Portal</h2>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://www.childwelfareportal.org/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Watch Demo</a>
                    </div>
                    <br />
                    <hr />
                    <ul style={{ textAlign: 'left', listStyle: 'square', marginTop: 12, marginLeft: 23, lineHeight: 1.4 }}>
                        <li>Built collaboratively by a team of 4 developers.</li>
                        <li>Reed handled the fetch API integration, UI design, and debugging.</li>
                        <li>Login user environment with JWT.</li>
                        <li>MERN Stack | GraphQL | Material UI | Apollo</li>
                    </ul>
                </div>
            </div>

            <div className="portfolio-container proj2">
                <div className="cc2">
                    <h2>BakPak</h2>
                    <br />
                    <hr />
                    <div className="p2-links">
                        <a href="https://archonology.github.io/BakPak/#/home" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                    </div>
                    <br />
                    <hr />
                    <div className="p2-links">
                        <a href="https://github.com/archonology/BakPak" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Watch Demo</a>
                    </div>
                    <br />
                    <hr />
                    <ul style={{ textAlign: 'left', listStyle: 'square', marginTop: 12, marginLeft: 23, lineHeight: 1.4 }}>
                        <li>Built collaboratively by a team of 4 developers.</li>
                        <li>Reed handled the fetch API integration, UI design, and debugging.</li>
                        <li>Login user environment with JWT.</li>
                        <li>MERN Stack | GraphQL | Material UI | Apollo</li>
                    </ul>
                </div>
            </div>
            <div className="projects-container">
                <div className="proj-columns">
                    <div className="proj-card card-1">
                        <Image src={prima} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>Prima-Materia</h3>
                        <hr />
                        <p>A search API and deck-building site for a popular cardgame.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'square', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 4 developers.</li>
                            <li>Reed handled the fetch API integration, UI design, and debugging.</li>
                            <li>Login user environment with JWT.</li>
                            <li>MERN Stack | GraphQL | Material UI | Apollo</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://prima-materia-84.herokuapp.com/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/Prima-Materia" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>

                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card">
                        <Image src={homeParty} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>Home Party</h3>
                        <hr />
                        <p>Real estate tracking and home-shopping blended with social media aspects.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'square', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 3 developers.</li>
                            <li>Reed was the project lead as well as architect for the front and backend design, CRUD routes, debugging, deployment, and testing.</li>
                            <li>MySQL | Handlebars | Express | Sequelize</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://home-party-app.herokuapp.com" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/Home-Party" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card">
                        <Image src={wanderComma} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>The Wandering Comma</h3>
                        <hr />
                        <p>A full stack application built with React, Mongoose, Express, and Node (MERN).</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'square', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 3 developers.</li>
                            <li>Reed was the project lead as well as architect for the front and backend design, CRUD routes, debugging, deployment, and testing.</li>
                            <li>MySQL | Handlebars | Express | Sequelize</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://the-wandering-comma.herokuapp.com" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/The-Wandering-Comma-Tech-Blog" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card">
                        <Image src={nightIn} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>A Night In</h3>
                        <hr />
                        <p>A full stack application built with React, Mongoose, Express, and Node (MERN).</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'square', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 3 developers.</li>
                            <li>Reed was the project lead as well as architect for the front and backend design, CRUD routes, debugging, deployment, and testing.</li>
                            <li>MySQL | Handlebars | Express | Sequelize</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://archonology.github.io/A-Night-In/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/A-Night-In" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="this-site-container">
                <div>
                    <h4>This Portfolio</h4>
                    <hr />
                    <p>Built with ReactJS and custom CSS for all formatting and animations, this portfolio utilizes a minimal number of components from CSS libraries. Check out the repo to see the code behind it!</p>
                </div>
                <div className="proj-links">
                    <a href="https://github.com/archonology/dev-portfolio" target={'_blank'} rel={'nonreferrer'}>See the Repository</a>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
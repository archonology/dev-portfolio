import React from "react";
import Image from 'mui-image'
import prima from '../images/prima-materia-home.jpg';
import homeParty from '../images/home-party-page.jpg'
import wanderComma from '../images/wandering-comma.jpg';
import nightIn from '../images/a-night-in-page.jpg';
import cwp from '../images/cwPOrtalNew.png'
import bakpak from '../images/BakPak2.png'

const Portfolio = (theme) => {
  
    const containerStyle3 = "projects-container " + theme.theme;
    const containerStyle4 = "this-site-container " + theme.theme;

    return (
        <>
            <div className={containerStyle3} style={{ marginTop: -25 }}>
                <div className="proj-columns">
                    <div className="proj-card card-1">
                        <Image src={cwp} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>The Child Welfare Portal</h3>
                        <hr />
                        <p>As a child welfare worker, I needed a way to track and provide resources so that I could pass on essential information to clients and fellow workers.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>A React app comissioned by a former coworker and built to specifications.</li>
                            <li>Fully functional user and hidden admin environments via JSON Web Token..</li>
                            <li>Utilizes continuous deployment practices to add features and make improvements.</li>
                            <li style={{ marginBottom: 7 }}>Login user environment with JWT.</li>
                            <hr />
                            <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>MERN Stack | GraphQL | Material UI | Apollo</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://prima-materia-84.herokuapp.com/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/Prima-Materia" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>

                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card card-1">
                        <Image src={bakpak} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>BakPak</h3>
                        <hr />
                        <p>As a student, I needed an application that offered a collection of tools commonly found in a backpack so that I can easily find and use them.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Implements fetch API.</li>
                            <li>Utilizes localStorage to save user's input and data.</li>
                            <li style={{ marginBottom: 7 }}>Built with Vanilla JS, Bootstrap, and Material UI components.</li>
                            <hr />
                            <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>ReactJS | LocalStorage | Material UI | GH-Pages</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://prima-materia-84.herokuapp.com/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/Prima-Materia" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>

                    </div>
                </div>
                <div className="proj-columns">
                    <div className="proj-card card-1">
                        <Image src={prima} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>Prima-Materia</h3>
                        <hr />
                        <p>As a player of Magic The Gathering, I needed an application that would let me log in and search a database of all Magic cards, add the ones I like to a favorites list, and build virtual decks so that I can improve my deck-building skills, see cards from all sets, and make deck-building more efficient.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 4 developers.</li>
                            <li>I handled the fetch API integration, UI design, and debugging.</li>
                            <li style={{ marginBottom: 7 }}>Login user environment with JWT.</li>
                            <hr />
                            <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>MERN Stack | GraphQL | Material UI | Apollo</li>
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
                        <p>As a home-seeker, I needed a way to save the homes I like best, pair them with styles and furnishings, and share what I find with friends and family so that I can track and share my home-buying journey.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 3 developers.</li>
                            <li style={{ marginBottom: 7 }}>I was the project lead as well as architect for the front and backend design, CRUD routes, debugging, deployment, and testing.</li>
                            <hr />
                            <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>MySQL | Handlebars | Express | Sequelize</li>
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
                        <p>As a budding web developer, I needed a custom blog where I could post about tech topics so that I could share what I'm learning in a professional way.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Designed and constructed front to back by yours truly.</li>
                            <li style={{ marginBottom: 7 }}> Full Stack app Deployed on Heroku.</li>
                            <hr />
                            <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>MySQL | Handlebars | Express | Sequelize</li>
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
                        <p>As a person ready for dinner and relaxation, I needed to find food recipes, cocktail recipes, and a show to watch so that I can have an enjoyable night in.</p>
                        <hr />
                        <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 5, marginLeft: 23, lineHeight: 1.4 }}>
                            <li>Built collaboratively by a team of 3 developers.</li>
                            <li>I was in charge of Tailwind CSS library research, implementation, and tutorials for the team.</li>
                            <li style={{ marginBottom: 7 }}>I created the search and save cocktail recipes component: fetch API, HTML, JS, and CSS.</li>
                            <hr />
                            <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>Vanilla JS | Tailwind CSS | LocalStorage | Fetch API</li>
                        </ul>
                        <div className="proj-links">
                            <a href="https://archonology.github.io/A-Night-In/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                            <a href="https://github.com/archonology/A-Night-In" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={containerStyle4}>
                <div>
                    <h4>This Portfolio</h4>
                    <hr />
                    <p>Built with ReactJS and custom CSS for all formatting and animations, this portfolio utilizes React Hooks and a minimal number of components from CSS libraries. Check out the repo to see the code behind it!</p>
                </div>
                <div className="proj-links">
                    <a href="https://github.com/archonology/dev-portfolio" target={'_blank'} rel={'nonreferrer'}>See the Repository</a>
                </div>
            </div>
        </>
    )
}

export default Portfolio;
import React from "react";
import Image from 'mui-image'
import prima from '../images/prima-materia-home.jpg';
import homeParty from '../images/home-party-page.jpg'
import wanderComma from '../images/wandering-comma.jpg';
import nightIn from '../images/a-night-in-page.jpg';
import cwp from '../images/cwPOrtalNew.png'
import bakpak from '../images/BakPak2.png'

const Portfolio = (theme) => {
    const containerStyle = "portfolio-container proj1 " + theme.theme;
    const containerStyle2 = "portfolio-container proj2 " + theme.theme;
    const containerStyle3 = "projects-container " + theme.theme;
    const containerStyle4 = "this-site-container " + theme.theme;

    return (
        <>
            {/* <div className={containerStyle}>
                <div className="container-content">
                    <h2>The Child Welfare Portal</h2>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://www.childwelfareportal.org/" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links link2">
                        <a href="https://github.com/archonology/CW-Portal" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links link2">
                        <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Watch Demo</a>
                    </div>
                    <br />
                    <hr />
                    <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 12, marginLeft: 26, lineHeight: 1.4 }}>
                        <li>A React app comissioned by a former coworker and built to specifications.</li>
                        <li>Fully functional user and hidden admin environments via JSON Web Token.</li>
                        <li style={{ marginBottom: 7 }}>Utilizes continuous deployment practices to add features and make improvements.</li>
                        <hr/>
                        <li style={{marginTop: 7, listStyle: 'none', fontWeight: '700'}}>MERN Stack | GraphQL | Material UI | Apollo</li>
                    </ul>
                </div>
            </div>

            <div className={containerStyle2}>
                <div className="cc2">
                    <h2>BakPak</h2>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://archonology.github.io/BakPak/#/home" target={'_blank'} rel={'nonreferrer'}>Live Site</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links link2">
                        <a href="https://github.com/archonology/BakPak" target={'_blank'} rel={'nonreferrer'}>Repository</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links link2">
                        <a href="https://github.com/archonology" target={'_blank'} rel={'nonreferrer'}>Watch Demo</a>
                    </div>
                    <br />
                    <hr />
                    <ul style={{ textAlign: 'left', listStyle: 'disc', marginTop: 12, marginLeft: 26, lineHeight: 1.4 }}>
                        <li>As a student, I wanted an application that offered a collection of tools commonly found in a backpack so that all my study and research tools could be found in one place.</li>
                        <li style={{ marginBottom: 7 }}>I keep adding new tools built with vanilla JS: stay tuned for more!</li>
                        <hr />
                        <li style={{ marginTop: 7, listStyle: 'none', fontWeight: '700' }}>ReactJS | LocalStorage | Fetch API | GH-Pages</li>
                    </ul>
                </div>
            </div> */}
            <div className={containerStyle3} style={{ marginTop: -25 }}>
                <div className="proj-columns">
                    <div className="proj-card card-1">
                        <Image src={cwp} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>The Child Welfare Portal</h3>
                        <hr />
                        <p>As a childwelfare worker, I need an application that lets me provide up to date resources to my contemporaries and families in the field so that I can pass on essential trainings and resources to those who need them most.</p>
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
                        <p>As a student, I wanted an application that offered a collection of tools commonly found in a backpack so that all my study and research tools could be found in one place.</p>
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
                    <div className="proj-card">
                        <Image src={homeParty} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' />
                        <h3>Home Party</h3>
                        <hr />
                        <p>As a home-seeker, I want an app that lets me save the homes I like best, pair them with the things I want to fill the home with, and share what I find with my friends and family so that I can not only find the right new home, but share the journey with others as well.</p>
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
                        <p>As a budding web developer, I want a blog where I can post about tech topics and manage the content so that I can share what I'm learning in a professional way.</p>
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
                        <p>As a person ready for dinner and relaxation, I want to find food recipes, cocktail recipes, and a show to watch while I relax and eat so that I can have an enjoyable night in.</p>
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
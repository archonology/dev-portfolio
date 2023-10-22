import React from "react";
import { useState } from "react";

const Resume = (theme) => {
    const containerStyle = "resume-" + theme.theme;
    const containerStyle2 = "featured-" + theme.theme;
    const [visibility, setVisibility] = useState({ display: 'none' });
    function showButton() {
        setVisibility({ display: 'block' });
    }
    return (
        <section className={containerStyle}>
            <div className="resume-col resume-col1">
                <h2>EDUCATION</h2>
                <div className={containerStyle2}>
                    <h3>Bachelor of Science, Information Science & Technology</h3>
                    <h4>University of Wisconsin, Milwaukee • current student</h4>
                    <hr />
                    <br />
                    <h3>Full Stack Web Development Certificate</h3>
                    <h4>University of Minnesota • 2022</h4>
                    <hr />
                    <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, NoSQL, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. </p>
                    <div className="proj-links certif">
                        <a href="https://www.credly.com/badges/38a79ed6-ec04-410f-9ba1-f54002812bf5/public_url" target={'_blank'} rel={'nonreferrer'} style={{ marginTop: '.2em', backgroundColor: 'var(--primary)', color: 'var(--paper)', padding: '.3rem', borderRadius: '0 0 10px 10px', width: '45%' }}>See Certificate</a>
                    </div>
                    <br />
                    <h3>Bachelor of Arts, Literature</h3>
                    <h4>University of Minnesota, Morris • 2004 - 2008</h4>
                    <hr />

                    <br />
                    <h2>SKILLS</h2>
                    <p>JavaScript • HTML5 • CSS3 • ReactJS • SQL • MySQL • GraphQL • WebAPI • Git • React • Unit Testing • Agile Practices • Express • NodeJS • TypeScript • JQuery • CMS • UI/UX • and much more!</p>
                    <br />
                    <hr />
                    <br />
                    <a href="https://www.hackerrank.com/profile/MeherDevs" target="_blank" rel="nonreferrer" style={{ color: 'var(--liveGreen)', fontWeight: '700' }} className=" certif"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png' width={100}></img></a>
                    <br />
                    <a target="_blank" rel="nonreferrer" href="https://www.codewars.com/r/C6HkBg"><img src="https://www.codewars.com/users/archonology/badges/large" alt="codewars badge large" style={{ marginTop: '1em' }} /></a>
                    <br/>

                </div>
            </div>
            <div className="resume-col resume-col2" onMouseEnter={showButton} onTouchMove={showButton}>
                <h2>EXPERIENCE</h2>
                <h3>Development Coordinator</h3>
                <h4>Violence Prevention Center • June 2022 - Present • Grand Marais, MN</h4>
                <hr />
                <ul>
                    <li>
                        Developed and deployed a brand new website on the Wix platform resulting in:
                        <ul style={{listStyle: 'circle', marginBottom: '.5em'}}>
                            <li>80% improvement in site accessibility, SEO performance, and user experience</li>
                            <li>20% increase in site traffic since deployment</li>
                            <li>100% increase in donations via new web traffic</li>
                        </ul>
                    </li>
                    <li>
                        Providing consultation on technologies including SaaS, website accessibility, database management, Website SEO, and donation payment systems.
                    </li>
                    <li>
                        Design original advertising using Adobe Express and Illustrator.
                    </li>
                    <li>
                        Communicate with local businesses, donors, and regional nonprofits to develop programs, donor relationships, and events.
                    </li>
                    <li>
                        Coordinate and implement marketing strategies and marketing campaigns.
                    </li>
                    <li>
                        Create original copy for print and online campaigns.
                    </li>
                </ul>
                <br />
                <h3>Instructional Specialist for Full Stack Flex Boot Camp</h3>
                <h4>2U / University of Minnesota • April 2022 - Present • Remote</h4>
                <hr />
                <ul>
                    <li>
                        Support the instructor in class, provide mentorship, tutoring, and overall support to students in their mastery of learning objectives.

                    </li>
                    <li>
                        Advanced knowledge of coding principles and communication skills to provide excellent education support.
                    </li>
                </ul>
                <br />
                <h3>Volunteer Full Stack Developer for The Child Welfare Portal</h3>
                <h4>December 2022 - Present</h4>
                <hr />
                <ul>
                    <li>
                        Built and shipped this single page application with user and admin web token environments. Utilized JavaScript, NodeJS, Express, Apollo, React, MongoDB, and Mongoose to create an application (and its components) that can be fully managed by an admin.
                    </li>
                    <li>
                        Implemented asynchronous programming,  prototypical inheritance, source control on Git, and continuous deployment of updates, bug fixes, and new features.
                    </li>
                    <li>
                        Delivered a promptly deployed bug-free application that exceeded client expectations.
                    </li>
                </ul>
            </div>
            <div className="toTop">
                <button
                    className="toTop-button" style={visibility}
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo(0, 0);
                        setVisibility({ display: 'none' });
                    }}
                >TO TOP</button>
            </div>
        </section>
    )
}

export default Resume;
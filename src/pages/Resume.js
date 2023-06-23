import React from "react";

const Resume = (theme) => {
    const containerStyle = "resume-" + theme.theme;
    const containerStyle2 = "featured-" + theme.theme;
    return (
        <section className={containerStyle}>
            <div className="resume-col resume-col1">
                <h2>EDUCATION</h2>
                <div className={containerStyle2}>
                    <h3>Full Stack Web Development Certificate</h3>
                    <h4>University of Minnesota • 2022</h4>
                    <hr />
                    <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, NoSQL, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS. </p>
                    <div className="proj-links">
                        <a href="https://www.credly.com/badges/38a79ed6-ec04-410f-9ba1-f54002812bf5/public_url" target={'_blank'} rel={'nonreferrer'}>See Certificate</a>
                    </div>
                
                <br />
                <h2>SKILLS</h2>
                    <p>JavaScript • HTML • CSS • MERN Stack • GraphQL • Web API • Git • React • Unit Testing • Agile Practices • Express • Node </p>
                </div>
            </div>
            {/* <div className="resume-col resume-col2">
                <h2>SKILLS</h2>
                <p>JavaScript • HTML • CSS • MERN Stack • GraphQL • Web API • Git • React • Unit Testing • Agile Practices • Express • Node </p>
            </div> */}
            <div className="resume-col resume-col2">
                <h2>EXPERIENCE</h2>
                <h3>Instructional Specialist for Full Stack Flex Boot Camp</h3>
                <h4>2U / University of Minnesota • April 2022 - Present • Remote</h4>
                <hr />
                <ul>
                    <li>Support the instructor in class, provide mentorship, tutoring, and overall support to students in their mastery of learning objectives.</li>
                    <li>Advanced knowledge of coding principles and communication skills to provide excellent education support.</li>
                </ul>
                <br />
                <h3>Volunteer Full Stack Developer for The Child Welfare Portal</h3>
                <h4>December 2022 - Present</h4>
                <hr />
                <ul>
                    <li>Built and shipped this single page application with user and admin web token environments. Utilized JavaScript, NodeJS, Express, Apollo, React, MongoDB, and Mongoose to create an application (and its components) that can be fully managed by an admin.</li>
                    <li>Implemented asynchronous programming,  prototypical inheritance, source control on Git, and continuous deployment of updates, bug fixes, and new features.</li>
                    <li>Delivered a promptly deployed bug-free application that exceeded client expectations.</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;
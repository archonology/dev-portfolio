import React from "react";
import { useState } from "react";
import EducationCard from "../components/EducationCard";
import WorkCard from "../components/WorkCard";
import skills from "../components/skills";

const Resume = (theme) => {
    const containerStyle = "resume-" + theme.theme;
    const containerStyle2 = "featured-" + theme.theme;
    const [visibility, setVisibility] = useState({ display: 'none' });
    function showButton() {
        setVisibility({ display: 'block' });
    }
    return (
        <section className={containerStyle}>
            <div className="resume-col" onMouseEnter={showButton} onTouchMove={showButton}>
                <h2>EXPERIENCE</h2>
                <WorkCard />
                <br />
                <hr />
                <br />
                <h2>ALGORITHM STATS</h2>
                <h3>HackerRank</h3>
                <a href="https://www.hackerrank.com/profile/MeherDevs" target="_blank" rel="nonreferrer" style={{ color: 'var(--liveGreen)', fontWeight: '700' }} className=" certif"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/800px-HackerRank_Icon-1000px.png' width={100} style={{ marginTop: '1em', marginBottom: '1em' }}></img></a>
                <h3>CodeWars</h3>
                <a target="_blank" rel="nonreferrer" href="https://www.codewars.com/r/C6HkBg"><img src="https://www.codewars.com/users/archonology/badges/micro" alt="codewars badge large" style={{ marginTop: '1em', marginBottom: '1em' }} /></a>
                <br />
            </div>
            <div className="resume-col resume-col1">
                <h2>EDUCATION</h2>
                <div className={containerStyle2}>
                    <EducationCard />
                    <br />
                    <h2>SKILLS</h2>
                    <div className="skills">
                        <div className="skillRow">
                            {skills.map((skill) => {
                                return (
                                    <>
                                        <div className="skillPoint">{skill}</div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>

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
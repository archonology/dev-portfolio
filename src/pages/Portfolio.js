import React from "react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Portfolio = (theme) => {
    const [visibility, setVisibility] = useState({ display: 'none' });
    function showButton() {
        setVisibility({ display: 'block' });
    }

    const containerStyle3 = "projects-container " + theme.theme;
    const containerStyle4 = "this-site-container " + theme.theme;

    return (
        <>
            <div className={containerStyle3} style={{ marginTop: -25 }} onMouseEnter={showButton} onTouchMove={showButton} onScroll={showButton}>
                <ProjectCard />
            </div>
            <div
                onMouseEnter={showButton} onTouchMove={showButton}
                className={containerStyle4}>
                <div>
                    <h4>This Portfolio</h4>
                    <hr />
                    <p>Built with ReactJS and custom CSS for all formatting and animations, this portfolio utilizes React Hooks and a minimal number of components from CSS libraries. Check out the repo to see the code behind it!</p>
                </div>
                <div
                    onMouseEnter={showButton} onTouchMove={showButton}
                    className="proj-links">
                    <a href="https://github.com/archonology/dev-portfolio" target={'_blank'} rel={'nonreferrer'} style={{width: '35%', borderRadius: '0 0 10px 10px', backgroundColor: 'var(--primary)', color: 'var(--paper)'}}>See the Repository</a>
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
        </>
    )
}

export default Portfolio;
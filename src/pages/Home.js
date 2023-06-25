import React from "react";
import Quotes from "../components/Quotes";

const Home = (theme) => {
    const className = 'container ' + theme.theme;
    console.log(className);
    return (

        <>
            <div className={className}>
                <div className="home-container-content">
                    <p className="about">Reed Meher is a certified full stack web developer and a father of three. He specializes in the MERN Stack and learning new tricks.</p>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/reed-meher" target='_blank' rel='nonreferrer'>Follow on LinkedIn</a>
                    </div>
                    <br />
                    <hr />
                    <div className="links">
                        <a href="https://github.com/archonology" target='_blank' rel='nonreferrer'>Follow on Github</a>
                    </div>
                </div>
            </div>
            <div>
                <Quotes theme={theme.theme} />
            </div>
        </>
    )
}

export default Home;
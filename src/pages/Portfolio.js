import React from "react";

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
        </>
    )
}

export default Portfolio;
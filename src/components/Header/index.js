import * as React from "react";

const Header = () => {
    return (
        <>
            <header>
                <h1>REED MEHER</h1>
                <p>Full Stack Web Developer</p>
                 <hr/>
                <nav>
                    <ul>
                        <a href='/#/portfolio'><li>Portfolio</li></a>
                        <a href='/#/resume'><li>Resume</li></a>
                        <a href='/#/contact'><li>Contact</li></a>
                    </ul>
                </nav>
            </header>

            <div className="donate">
<button className="donate-button">DONATE</button>
            </div>

        </>
    )
}

export default Header;
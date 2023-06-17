import * as React from "react";
import { Link } from 'react-router-dom';

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

        </>
    )
}

export default Header;
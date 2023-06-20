import * as React from "react";
import FoundationIcon from '@mui/icons-material/Foundation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    return (
        <>
            <header>
                <h1>REED MEHER</h1>
                <p>Full Stack Web Developer</p>
                <hr />
                <nav>
                    <ul>
                        <a href='/#/portfolio'><li>Portfolio</li></a>
                        <a href='/#/resume'><li>Resume</li></a>
                        <a href='/#/contact'><li>Contact</li></a>
                    </ul>
                    <ul className="iconUl">
                        <a href='/'><li><FoundationIcon /></li></a>
                        <a href=''><li><DarkModeIcon /></li></a>
                        <a href=''><li><LightModeIcon /></li></a>
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
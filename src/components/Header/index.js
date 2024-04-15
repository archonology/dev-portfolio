import { useState } from 'react';
import { useAppCtx } from '../../AppProvider';
import FoundationIcon from '@mui/icons-material/Foundation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header() {
    const { theme, toggleTheme } = useAppCtx();
    const [clickState1, setClickState1] = useState('not-clicked');
    // const [clickState2, setClickState2] = useState('not-clicked');
    const [clickState3, setClickState3] = useState('not-clicked');
    const [visibility, setVisibility] = useState({ visibility: 'hidden' });

    function handleClick1() {
        if (clickState1 === 'not-clicked') {
            setClickState1('clicked');
            // setClickState2('not-clicked');
            setClickState3('not-clicked');
        } else {
            setClickState1('not-clicked');
        }
    }

    // function handleClick2() {
    //     if (clickState2 === 'not-clicked') {
    //         setClickState2('clicked');
    //         setClickState1('not-clicked');
    //         setClickState3('not-clicked');
    //     } else {
    //         setClickState2('not-clicked');
    //     }
    // }
    function handleClick3() {
        if (clickState3 === 'not-clicked') {
            setClickState3('clicked');
            // setClickState2('not-clicked');
            setClickState1('not-clicked');
        } else {
            setClickState3('not-clicked');
        }
    }

    function clearClicks() {
        // setClickState2('not-clicked');
        setClickState1('not-clicked');
        setClickState3('not-clicked');
    }

    function showButton() {
        console.log('scrolling?');
        setVisibility({ visibility: 'visible' });
    }

    return (
        <>
            <header>
                <h1 id='X'>MeherDevs</h1>
                <p>Web Development Services | LLC</p>
                <hr />
                <nav>
                    <ul>
                        <a
                            href='#/portfolio'
                            onClick={handleClick1}
                            className={clickState1}>
                            <li>Portfolio</li>
                        </a>
                        {/* <a
                            href='#/resume'
                            onClick={handleClick2}
                            className={clickState2}>
                            <li>Resume</li>
                        </a> */}
                        <a
                            href='#/contact'
                            onClick={handleClick3}
                            className={clickState3}>
                            <li>Contact</li>
                        </a>
                    </ul>
                    {theme === 'light' ? (
                        <>
                            <ul className="iconUl">
                                <a href='#/' onClick={clearClicks}><li><FoundationIcon /></li></a>
                                <li onClick={toggleTheme}><DarkModeIcon /></li>
                                {/* video demos are in development */}
                                {/* <a href='#/'><li><VideoLibraryIcon /></li></a> */}
                            </ul>
                        </>) : (<>
                            <ul className="iconUl">
                                <a href='#/' onClick={clearClicks}><li><FoundationIcon /></li></a>
                                <li onClick={toggleTheme}><LightModeIcon /></li>
                                {/* <a href='#/'><li><VideoLibraryIcon /></li></a> */}
                            </ul>
                        </>)}

                </nav>
            </header>
        </>
    )
}
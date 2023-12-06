import './css/Reset.css'
import './css/Variables.css'
import './css/Style.css';
import { createContext, useState } from 'react';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import FoundationIcon from '@mui/icons-material/Foundation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  const [style, setStyle] = useState({ backgroundColor: 'var(--paper)' })
  const [clickState1, setClickState1] = useState('not-clicked');
  const [clickState2, setClickState2] = useState('not-clicked');
  const [clickState3, setClickState3] = useState('not-clicked');
  const [visibility, setVisibility] = useState({ visibility: 'hidden' });

  function handleClick1() {
    if (clickState1 === 'not-clicked') {
      setClickState1('clicked');
      setClickState2('not-clicked');
      setClickState3('not-clicked');
    } else {
      setClickState1('not-clicked');
    }
  }

  function handleClick2() {
    if (clickState2 === 'not-clicked') {
      setClickState2('clicked');
      setClickState1('not-clicked');
      setClickState3('not-clicked');
    } else {
      setClickState2('not-clicked');
    }
  }


  function handleClick3() {
    if (clickState3 === 'not-clicked') {
      setClickState3('clicked');
      setClickState2('not-clicked');
      setClickState1('not-clicked');
    } else {
      setClickState3('not-clicked');
    }
  }

  function clearClicks() {
    setClickState2('not-clicked');
    setClickState1('not-clicked');
    setClickState3('not-clicked');
  }

  function showButton() {
    console.log('scrolling?');
    setVisibility({ visibility: 'visible' });
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className='background-all' style={style}>
          <header className={theme}>
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
                <a
                  href='#/resume'
                  onClick={handleClick2}
                  className={clickState2}>
                  <li>Resume</li>
                </a>
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
                    <li onClick={() => { setTheme('dark'); setStyle({ backgroundColor: 'var(--testDark)', transition: '2s' }) }}><DarkModeIcon /></li>
                    {/* video demos are in development */}
                    {/* <a href='#/'><li><VideoLibraryIcon /></li></a> */}
                  </ul>
                </>) : (<>
                  <ul className="iconUl">
                    <a href='#/' onClick={clearClicks}><li><FoundationIcon /></li></a>
                    <li onClick={() => { setTheme('light'); setStyle({ backgroundColor: 'var(--paper)', transition: '2s' }) }}><LightModeIcon /></li>
                    {/* <a href='#/'><li><VideoLibraryIcon /></li></a> */}
                  </ul>
                </>)}

            </nav>
          </header>

          <Routes>
            <Route path='/' element={<Home theme={theme} />}></Route>
            <Route index element={<Home theme={theme} />} />
            <Route path="portfolio" element={<Portfolio theme={theme} />} />
            <Route path="resume" element={<Resume theme={theme} />} />
            <Route path="contact" element={<Contact theme={theme} />} />
            <Route path="home" element={<Home theme={theme} />} />
            <Route path="*" element={<Home theme={theme} />} />
          </Routes>
          <div>
            <Footer theme={theme} />
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}


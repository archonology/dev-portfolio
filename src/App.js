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
import Quotes from './components/Quotes';
import FoundationIcon from '@mui/icons-material/Foundation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('light');
  const [style, setStyle] = useState({ backgroundColor: 'white' })
  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className='background-all' style={style}>
          <header className={theme}>
            <h1>REED MEHER</h1>
            <p>Full Stack Web Developer</p>
            <hr />
            <nav>
              <ul>
                <a href='/#/portfolio'><li>Portfolio</li></a>
                <a href='/#/resume'><li>Resume</li></a>
                <a href='/#/contact'><li>Contact</li></a>
              </ul>
              {theme === 'light' ? (
                <>
                  <ul className="iconUl">
                    <a href='/#/home'><li><FoundationIcon /></li></a>
                    <li onClick={() => { setTheme('dark'); setStyle({ backgroundColor: '#2b2e35' }) }}><DarkModeIcon /></li>
                    <a href='/#/home'><li><VideoLibraryIcon /></li></a>
                  </ul>
                </>) : (<>
                  <ul className="iconUl">
                    <a href='/#/home'><li><FoundationIcon /></li></a>
                    <li onClick={() => { setTheme('light'); setStyle({ backgroundColor: 'white' }) }}><LightModeIcon /></li>
                    <a href='/#/home'><li><VideoLibraryIcon /></li></a>
                  </ul>
                </>)}

            </nav>
          </header>

          <div className="donate">
            <a href='https://buy.stripe.com/28oaENdwM33Cgbm5kl' target='_blank' rel='nonreferrer'><button className="donate-button">DONATE</button></a>
          </div>

          <Routes>
            <Route path='/' element={<Home theme={theme} />}></Route>
            {/* <Route index element={<Home theme={theme} />} /> */}
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


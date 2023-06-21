import './css/Reset.css'
// import './css/DarkVars.css'
import './css/Variables.css'
import './css/Style.css';
import { createContext, useContext, useState } from 'react';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
// site pages and components
// import Home from './pages/Home';
// import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Quotes from './components/Quotes';
import FoundationIcon from '@mui/icons-material/Foundation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

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
              <ul className="iconUl">
                <a href='/'><li><FoundationIcon /></li></a>
                <li onClick={() => { setTheme('dark'); setStyle({ backgroundColor: 'black' }) }}><DarkModeIcon /></li>
                <li onClick={() => { setTheme('light'); setStyle({ backgroundColor: 'white' }) }}><LightModeIcon /></li>
              </ul>
            </nav>
          </header>

          <div className="donate">
            <button className="donate-button">DONATE</button>
          </div>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

const Home = () => {
  const theme = useContext(ThemeContext);
  const className = 'container' + ' ' + theme;
  console.log(className);
  return (

    <>
      <div className={className}>
        <div className="container-content">
          <p className="about">Reed Meher is a certified full stack web developer. He specializes in ReactJS, CSS, and learning new tricks.</p>
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
        <Quotes theme={theme} />
      </div>
    </>
  )
}


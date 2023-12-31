import './css/Reset.css'
import './css/Variables.css'
import './css/Style.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import AppProvider from './AppProvider';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './components/Header';
import { useAppCtx } from './AppProvider';

// import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';




export default function App() {
  const { theme } = useAppCtx();
  const background = `${theme} ${theme}-background-all`;

  return (
    <Router>
      <div className={background}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <div>
            <Footer />
        </div>
      </div>
      </Router>
  );
}


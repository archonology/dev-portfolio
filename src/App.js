import "./css/Reset.css";
import "./css/Variables.css";
import "./css/Style.css";
import "./css/QouteSlider.css";
import "./css/Responsive.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Writing from "./pages/Writing";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="writing" element={<Writing />} />
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

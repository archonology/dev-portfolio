import { useState } from "react";
import { useAppCtx } from "../../AppProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  const { theme, toggleTheme } = useAppCtx();
  const [clickState1, setClickState1] = useState("not-clicked");
  const [clickState2, setClickState2] = useState('clicked');
  const [clickState3, setClickState3] = useState("not-clicked");
  const [visibility, setVisibility] = useState({ visibility: "hidden" });

  function handleClick1() {
    if (clickState1 === "not-clicked") {
      setClickState1("clicked");
      setClickState2('not-clicked');
      setClickState3("not-clicked");
    } else {
      setClickState1("not-clicked");
    }
  }

  function handleClick2() {
    if (clickState2 === "not-clicked") {
      setClickState3("not-clicked");
      setClickState2('clicked');
      setClickState1("not-clicked");
    } else {
      setClickState3("not-clicked");
    }
  }

  function handleClick3() {
    if (clickState3 === "not-clicked") {
      setClickState3("clicked");
      setClickState2('not-clicked');
      setClickState1("not-clicked");
    } else {
      setClickState3("not-clicked");
    }
  }

  function clearClicks() {
    setClickState2('not-clicked');
    setClickState1("not-clicked");
    setClickState3("not-clicked");
  }

  function showButton() {
    console.log("scrolling?");
    setVisibility({ visibility: "visible" });
  }

  return (
    <>
      <header>
        {theme === "light" ? (
          <>
            <p className="iconUl" onClick={toggleTheme}>
              <DarkModeIcon />
            </p>
          </>
        ) : (
          <>
            <p className="iconUl" onClick={toggleTheme}>
              <LightModeIcon />
            </p>
          </>
        )}
        <h1>REED MEHER</h1>
        <h4> Full Stack Web Developer // MeherDevs LLC. est. 2023</h4>
        {/* <h4>Web Development by Reed Meher</h4> */}
        {/* <p>Web Development Services | LLC</p> */}
        {/* <hr /> */}
        <nav>
          <ul>
            <a href="#/" onClick={handleClick2}
            className={clickState2}
            >
              <li id="about">About</li>
            </a>
            <a
              href="#/portfolio"
              onClick={handleClick1}
              className={clickState1}
            >
              <li>Portfolio</li>
            </a>
            {/* <a
                            href='#/resume'
                            onClick={handleClick2}
                            className={clickState2}>
                            <li>Resume</li>
                        </a> */}
            <a href="#/contact" onClick={handleClick3} className={clickState3}>
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

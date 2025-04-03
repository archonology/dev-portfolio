import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page on refresh
    navigate("/");
  }, []);

  const [clickState1, setClickState1] = useState("clicked");
  const [clickState2, setClickState2] = useState("not-clicked");
  const [clickState3, setClickState3] = useState("not-clicked");
  const [clickState4, setClickState4] = useState("not-clicked");

  function handleClick1() {
    setClickState1("clicked");
    setClickState2("not-clicked");
    setClickState3("not-clicked");
    setClickState4("not-clicked");
  }

  function handleClick2() {
    setClickState4("not-clicked");
    setClickState3("not-clicked");
    setClickState2("clicked");
    setClickState1("not-clicked");
  }

  function handleClick3() {
    setClickState4("not-clicked");
    setClickState3("clicked");
    setClickState2("not-clicked");
    setClickState1("not-clicked");
  }
  function handleClick4() {
    setClickState4("clicked");
    setClickState3("not-clicked");
    setClickState2("not-clicked");
    setClickState1("not-clicked");
  }

  return (
    <>
      <header>
        <h1>REED MEHER</h1>
        <h2>MeherDevs LLC. // Coding & Writing</h2>
        <nav>
          <ul>
            <li>
              <a
                href="#/"
                onClick={handleClick1}
                className={clickState1}
                id="about"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#/portfolio"
                onClick={handleClick2}
                className={clickState2}
              >
                Coding
              </a>
            </li>
            <li>
              <a
                href="#/writing"
                onClick={handleClick3}
                className={clickState3}
              >
                Writing
              </a>
            </li>
            <li>
              <a
                href="#/contact"
                onClick={handleClick4}
                className={clickState4}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

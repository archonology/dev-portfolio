import { useState } from "react";
import UpArrow from "../UpArrow";

const EdCard = ({ ed }) => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <div
      className="award"
      onMouseEnter={() => setShowBtn(true)}
      onTouchMove={() => setShowBtn(true)}
      onScroll={() => setShowBtn(true)}
    >
      <h3>{ed.award}</h3>
      <h4>{ed.institution}</h4>
      <h5>{ed.dates}</h5>
      <p>{ed.description}</p>
      <div id="linkBox">
        <ul>
          <li>
            <a
              href={ed.link}
              rel="non_openner"
              target="_blank"
              aria-label={ed.linkTitle}
            >
              Learn More
            </a>
          </li>
        </ul>
      </div>
      <UpArrow showBtn={showBtn} />
    </div>
  );
};

export default EdCard;

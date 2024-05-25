import { useState } from "react";
import UpArrow from "../UpArrow";
import education from "../education";
const EdCard = () => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      {education.map((ed) => {
        return (
          <div
            key={ed.id}
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
                    aria-label="Learn More"
                  >
                    Learn More
                  </a>
                </li>
                {ed.certificate ? (
                  <li>
                    <a
                      href={ed.certificate}
                      rel="non_openner"
                      target="_blank"
                      aria-label="See Certificate"
                    >
                      See Certificate
                    </a>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <UpArrow showBtn={showBtn} />
          </div>
        );
      })}
    </>
  );
};

export default EdCard;

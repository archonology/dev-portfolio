import { useState } from "react";
import Image from "mui-image";
import writings from './writings'
import UpArrow from "../UpArrow";
const WritingCard = () => {
    const [showBtn, setShowBtn] = useState(false);
  return (
    <>
    {writings.map((writ)=>{
    return(
        <div className="projBox" key={writ.id}>
        <figure id="projImgBox">
          <a 
          href={writ.pdf}
          rel="non_openner"
          target="_blank"
          aria-label={writ.pdf}
          >
          <Image
            id="folioImg"
            src={writ.image}
            bgColor="black"
            alt={writ.title}
            style={{ boxShadow: "9px 14px 18px -5px black", marginTop: '-7rem' }}
            duration={5000}
            onMouseEnter={() => setShowBtn(true)}
            onTouchMove={() => setShowBtn(true)}
            onScroll={() => setShowBtn(true)}
          ></Image>
          </a>
          <figcaption style={{ marginTop: '1.5rem'}}>{writ.title}</figcaption>
        </figure>
        <div id="projTextBox">
          <h2>{writ.title}</h2>
          <h4 style={{marginTop: '-1rem', fontSize: '18px', paddingBottom: '.8rem'}}>{writ.date}</h4>
          <p>{writ.desc}</p>
          <div id="linkBox" style={{ marginTop: '1rem'}}>
                <ul>
                  <li>
                    <a
                      href={writ.pdf}
                      rel="non_openner"
                      target="_blank"
                      aria-label={writ.pdf}
                      style={{padding: '2rem'}}
                    >
                      View
                    </a>
                  </li>
                </ul>
              </div>
        </div>
        <UpArrow showBtn={showBtn} />
      </div>
    );
  })}
</>
)};

export default WritingCard;

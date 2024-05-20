import React, { Suspense } from "react";
import { useState } from "react";
import Image from "mui-image";
import { useAppCtx } from "../AppProvider";
import ocean from "../images/ocean.png";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ProjCard = React.lazy(()=> import('../components/ProjectCard'));

const Portfolio = () => {
  const { theme } = useAppCtx();
  const [visibility, setVisibility] = useState({ display: "none" });
  function showButton() {
    setVisibility({ display: "block" });
  }

  const containerStyle3 = theme;

  return (
    <>
      <div className="oceanBox">
        <Image
          id="ocean"
          src={ocean}
          bgColor="black"
          alt="detail of an ocean wave"
        ></Image>
      </div>
      <div className="portfolioBox">
        <div
          className={containerStyle3}
          style={{ marginTop: -25 }}
          onMouseEnter={showButton}
          onTouchMove={showButton}
          onScroll={showButton}
        >
            <Suspense fallback={<div id="loadBox"><p>Loading...</p></div>}>
                    <ProjCard />      
            </Suspense>

        </div>

        <div className="toTop">
          <button
            className="toTop-button"
            style={visibility}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
              setVisibility({ display: "none" });
            }}
          >
            <KeyboardDoubleArrowUpIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

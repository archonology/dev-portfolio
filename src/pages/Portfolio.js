import React, { Suspense } from "react";
import { useState } from "react";
import Image from "mui-image";
import { useAppCtx } from "../AppProvider";
import ocean from "../images/ocean.png";
// import UpArrow from "../components/UpArrow";

const ProjCard = React.lazy(() => import("../components/ProjectCard"));

const Portfolio = () => {
  const { theme } = useAppCtx();
  // const [visibility, setVisibility] = useState({ display: "none" });
  // function showButton() {
  //   setVisibility({ display: "block" });
  // }
  // const [showBtn, setShowBtn] = useState(false);

  const containerStyle3 = theme;

  return (
    <>
      <div className="oceanBox">
        <Image
          id="ocean"
          src={ocean}
          bgColor="black"
          alt="detail of an ocean wave"
          duration={5000}
        ></Image>
      </div>
      <div className="portfolioBox">
        <div
          className={containerStyle3}
          style={{ marginTop: -25 }}
        >
          <Suspense
            fallback={
              <div id="loadBox">
                <p>Loading...</p>
              </div>
            }
          >
            <ProjCard />
          </Suspense>
        </div>

  
      </div>
    </>
  );
};

export default Portfolio;

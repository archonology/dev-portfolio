import React, { Suspense } from "react";
import Image from "mui-image";
import ocean from "../images/computes.jpeg";

const ProjCard = React.lazy(() => import("../components/ProjectCard"));

const Portfolio = () => {
  const containerStyle3 = "dark";

  return (
    <>
      <div className="oceanBox">
        {/* <Image
          id="ocean"
          // src={ocean}
          bgColor="var(--deepOcean)"
          // alt="detail of an ocean wave"
          duration={5000}
        ></Image> */}
      </div>
      <div className="portfolioBox">
        <div className={containerStyle3} style={{ marginTop: -25 }}>
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

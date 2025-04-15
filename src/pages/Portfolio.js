import React, { Suspense } from "react";
import Image from "mui-image";
import ocean from "../images/computes.jpeg";

const ProjCard = React.lazy(() => import("../components/ProjectCard"));

const Portfolio = () => {
  const containerStyle3 = "dark";

  return (
    <>
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

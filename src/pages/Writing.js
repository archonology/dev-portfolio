import React, { Suspense } from "react";
import Image from "mui-image";
import ocean from "../images/ocean.png";

const WritingCard = React.lazy(() => import("../components/WritingCard"));

const Writing = () => {
  return (
    <>
      <div className="portfolioBox">
        <div className="dark" style={{ marginTop: -25 }}>
          <Suspense
            fallback={
              <div id="loadBox">
                <p>Loading...</p>
              </div>
            }
          >
            <WritingCard />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Writing;

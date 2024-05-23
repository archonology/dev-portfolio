import React, { Suspense } from "react";

const HomeBody = React.lazy(()=> import("../components/HomeBody"))

const Home = () => {
  return (
    <Suspense
    fallback={
      <div id="loadBox">
        <p>Loading...</p>
      </div>
    }
  >
    <HomeBody />
  </Suspense>
  );
};

export default Home;

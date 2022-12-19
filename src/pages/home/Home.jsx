import React from "react";

import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          {/* <Featured /> */}
          <h1 className="homeTitle">Browse by property type</h1>
          {/* <PropertyList /> */}
          <h1 className="homeTitle">Homes guests love</h1>
          {/* <FeaturedProperties /> */}
          {/* <MailList /> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

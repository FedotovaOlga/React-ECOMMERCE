import React from "react";
import logo from "../../assets/logo-white.png";
// import homeBackground from "../../assets/home-background.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* <img src={homeBackground} alt="home background" className="home-background" /> */}
        <img src={logo} alt="logo" className="logo"/>
      
      {/* <div className="home-logo-container">
        <img src={homeLogo} alt="home logo" className="home-logo" />
      </div> */}
      {/* <div className="home-body">
      <img src={homeBackground} alt="home background" className="home-background" />
      </div> */}
    </div>
  );
};

export default Home;

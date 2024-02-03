import React from "react";
import logo from "../../assets/logo-white.png";
import pendants from "../../assets/pendants.jpg";
import earrings from "../../assets/earrings.jpg";
import houses from "../../assets/houses.jpg";
import lighthouses from "../../assets/lighthouses.jpg";
import "./Home.css";
import ImageButton from "../ImageButton/ImageButton";

const Home = () => {
  return (
    <div className="home-container">
        <img src={logo} alt="logo" className="logo"/>
        <h2>Jewelry</h2>
        <ImageButton image={pendants} text="Pendants" onClick={() => {}}/>
        <ImageButton image={earrings} text="Earrings" onClick={() => {}}/>
        <h2>3D Models</h2>
        <ImageButton image={houses} text="Little Houses" onClick={() => {}} />
      <ImageButton image={lighthouses} text="Lighthouses" onClick={() => {}} />
       
    </div>
  );
};

export default Home;

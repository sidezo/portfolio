import React from "react";
import "./home.css";
import Me from "../../assets/gg.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const home = () => {
  return (
    <div>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Kevin Zhang</h1>
          <span className="home__education">I am a Full-Stack Developer</span>

          <HeaderSocials />

          <ScrollDown />
        </div>
        <Shapes />
      </section>
      <div className="center-btn">
        <a href="#contact" className="btn hire-btn">
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default home;

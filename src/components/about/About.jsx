import React from "react";
import "./about.css";
import Avatar from "../../assets/kevinZavatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Avatar} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Kevin Zhang, a Full-Stack Developer based in San Jose, CA. I
              am a passionate and creative developer with a strong interest in
              building scalable and efficient software. I have a strong
              foundation in web development and system design. I am constantly
              learning and improving my skills to stay up-to-date with the
              latest technologies and trends. I am a team player and a problem
              solver who is always ready to take on new challenges.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage first__bar"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">System Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage second__bar"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Data Management& Optimization</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage third__bar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <AboutBox />
    </section>
  );
};

export default About;

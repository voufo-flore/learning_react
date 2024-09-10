import React from "react";
import "./Hero.css";
import { Zero, Icon, Html, Css, Js } from "../../index.js";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experience that inspires</h2>
        <p>Passionate Frontend Developer | Transforming Ideas Into Seamless and Visually Stunning Web Solutions</p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={Icon} alt="hero-icon" />
          </div>
          <img src={Zero} alt="react-icon" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={Html} alt="html-icon" />
          </div>

          <div className="tech-icon">
            <img src={Css} alt="css-icon" />
          </div>

          <div className="tech-icon">
            <img src={Js} alt="js-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

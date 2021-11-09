import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="faceBody">
        <figure>
          <div className="stripes-wraper">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <div class="gradient-mask"></div>
          <div class="palm-tree"></div>
        </figure>
      </div>
      <div>
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Landing;

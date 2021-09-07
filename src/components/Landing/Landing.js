import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default Landing;

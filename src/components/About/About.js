import React from "react";
import statue from "../images/statue.jpg";
import "./About.css";

function About() {
  return (
    <div className="aboutParent">
      <div>
        <div className="aboutSquare">
          <span className="glitch">ABOUT</span>
        </div>

        <img src={statue} className="aboutColumn" />
      </div>
      <div className="aboutBox">
        <div>
          Fullstack software engineer with a background in neuroscience and a
          love for language. I have always been the sort of person who seeks
          consensus, my approach to leadership is collaborative and
          team-oriented. I believe the most effective technical solutions are
          realized when all stakeholder perspectives are valued.
        </div>
      </div>
    </div>
  );
}

export default About;

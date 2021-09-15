import React from "react";
import "./Projects.css";
import potential from "../images/Group 32.png";
import data from "../Data";
import horizontalLine from "../images/Group 33.png";

function Projects() {
  return (
    <div className="projectParent">
      <img
        src={horizontalLine}
        alt="horizontalLine"
        className="horizontalLine"
      />
      <div>
        {data.map((x) => (
          <div>
            <div key={x.name} className="projectOverlayParent">
              <div className="shadow">
                {" "}
                {console.log(x.technologies.javascript)}{" "}
              </div>
              <div className="projectImageOverlay">
                {x.name === "Potential" ? (
                  <img src={potential} alt="potentialimage" />
                ) : null}
                <div>{x.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import "./Projects.css";
import data from "../Data";
import horizontalLine from "../images/Group 33.png";

function Projects() {
  return (
    <div className="projectParent">
      <div className="horizontalStyle">
        projects
        <div></div>
        002
      </div>
      <div>
        {data.map((x) => (
          <div>
            <div className="projectName">
              {x.name}
              {x.awards ? (
                <div className="jackpot">HACKATHON WINNER</div>
              ) : null}
            </div>
            <div key={x.name} className="projectOverlayParent">
              <div className="shadow">
                <div className="technologies">
                  {Object.values(x["technologies"][0]).map((x) => (
                    <p> {x}</p>
                  ))}
                </div>

                <div className="links">
                  {x.links[0]["git"] ? (
                    <div>
                      <a href={x.links[0]["git"]}>GITHUB</a>
                    </div>
                  ) : null}
                  {x.links[0]["video"] ? (
                    <div>
                      {" "}
                      <a href={x.links[0]["video"]}>VIDEO</a>
                    </div>
                  ) : null}
                  {x.links[0]["demo"] ? (
                    <div>
                      <a href={x.links[0]["demo"]}>DEMO</a>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="projectImageOverlay">
                <img src={x.image} />
                <div>{x.description}</div>
              </div>
            </div>
            {x.div ? (
              <div className="horizontalStyle">
                <div></div>
                {x.div}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import "./Face.css";
import resume from "../images/Crystal_Villanueva_resume.pdf";
import face from "../images/face2.jpg";

function Face() {
  return (
    <div className="faceParent">
      {/* <h1 className="cyberpunk glitched">Crystal</h1> */}
      <div class="hexa">
        <div class="hex1">
          <div class="hex2">
            <img src={face} alt="face" className="face" />
          </div>
        </div>
      </div>
      <div className="contactInfo">
        <div className="contactLine">
          <div>email</div>
          <div>linkedin</div>
          <div>medium</div>
          <div>resume</div>
        </div>
        {/* <div className="contactLine">
          blog:
          <div></div>
        </div>
        <div className="contactLine">
          linkedin:
          <div></div>
        </div> */}
      </div>
    </div>
  );
}

export default Face;

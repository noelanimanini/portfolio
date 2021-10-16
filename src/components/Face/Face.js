import React from "react";
import "./Face.css";
import resume from "../images/Crystal_Villanueva_resume.pdf";
import face from "../images/face2.jpg";

function Face() {
  return (
    <div className="faceParent">
      <div class="facebox">
        <img src={face} alt="face" className="face" />
      </div>
      <div className="contactInfo">
        <div>email</div>
        <div>linkedin</div>
        <div>medium</div>
        <div>resume</div>
      </div>
    </div>
  );
}

export default Face;

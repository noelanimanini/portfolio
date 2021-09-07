import React from "react";
import "./Face.css";
import face from "../images/face2.jpg";

function Face() {
  return (
    <div className="faceParent">
      <div className="faceBoxParent">
        <div className="faceBox">
          <img src={face} alt="face" className="faceImage" />
        </div>
        <div className="space"></div>
        <div className="faceName">Crystal Villanueva</div>
        <div className="faceIcons">icons</div>
      </div>
    </div>
  );
}

export default Face;

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
        <a
          className="button"
          href="mailto:noelani.villanueva@gmail.com?subject = Feedback&body = Message"
        >
          {" "}
          Email{" "}
        </a>
        <a
          className="button"
          href="https://www.linkedin.com/in/crystal-villanueva-151353145/"
        >
          Linkedin
        </a>
        <a
          className="button"
          href="https://crystal-villanueva.medium.com/?source=your_stories_page-------------------------------------"
          target="_blank"
        >
          Medium
        </a>

        <a className="button" href={resume} download>
          {" "}
          Resume
        </a>
      </div>
    </div>
  );
}

export default Face;

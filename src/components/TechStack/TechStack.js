import React from "react";
import horizontalLine from "../images/Group 29.png";
import aws from "../SVG/aws.png";
import react from "../SVG/react.png";
import html from "../SVG/html.png";
import js from "../SVG/js.png";
import postgresql from "../SVG/postgres.png";
import rails from "../SVG/rails.png";
import heroku from "../SVG/heroku.png";
import ruby from "../SVG/ruby.png";
import css from "../SVG/css.png";
import sql from "../SVG/sql.png";
import "./TechStack.css";

function TechStack() {
  return (
    <div>
      <div className="horizontalStyle">
        techstack
        <div></div>
        001
      </div>
      <div className="container">
        <ul>
          <li className="aws">
            <img src={aws} alt="aws" />

            <div className="hero-info">
              <p>AWS</p>
            </div>
          </li>
          <li className="css">
            <img src={css} alt="css" />

            <div className="hero-info">
              <p>CSS</p>
            </div>
          </li>
          <li className="react">
            <img src={react} alt="react" />

            <div className="hero-info">
              <p>React</p>
            </div>
          </li>
          <li className="heroku">
            <img src={heroku} alt="heroku" />

            <div className="hero-info">
              <p>heroku</p>
            </div>
          </li>
          <li className="ana">
            <img src={html} alt="html" />

            <div className="hero-info">
              <p>html</p>
            </div>
          </li>
          <li className="ana">
            <img src={js} alt="js" />

            <div className="hero-info">
              <p>Javascript</p>
            </div>
          </li>
          <li className="ana">
            <img src={ruby} alt="ruby" />

            <div className="hero-info">
              <p>ruby</p>
            </div>
          </li>
          <li className="ana">
            <img src={postgresql} alt="postgresql" />

            <div className="hero-info">
              <p>postgresql</p>
            </div>
          </li>
          <li className="ana">
            <img src={sql} alt="sql" />

            <div className="hero-info">
              <p>sql</p>
            </div>
          </li>

          <li className="ana">
            <img src={rails} alt="rails" />

            <div className="hero-info">
              <p>rails</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TechStack;

import React from "react";
import "./About.css";
import { aboutData } from "./../../api/fake";

const AboutMe = () => {
  return (
    <React.Fragment>
      <h1 className="about-text">
        {aboutData.title}
        <span className="highlight">{aboutData.myName}</span>
      </h1>
      {aboutData.description.map((des, index) => {
        return (
          <p className="about-text-description" key={index}>
            <span className="separator">> </span>
            {des}
          </p>
        );
      })}
      <h1 className="skills-text">
        <span className="my-skills-text">My Skills</span>
      </h1>
    </React.Fragment>
  );
};

export default AboutMe;

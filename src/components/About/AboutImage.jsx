import React from "react";
import { myImages } from "./../../api/fake";
import "./About.css";

const AboutImage = ({ counter }) => {
  return (
    <div className="about-image-div">
      <img alt="Hemdan" src={myImages[counter]}></img>
    </div>
  );
};

export default AboutImage;

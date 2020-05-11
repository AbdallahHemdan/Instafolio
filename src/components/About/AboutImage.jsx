import React from "react";
import { myImages } from "./../../api/fake";
import "./About.css";

const AboutImage = (props) => {
  return (
    <div className="about-image-div">
      <img alt="Hemdan" src={myImages[props.counter]}></img>
    </div>
  );
};

export default AboutImage;

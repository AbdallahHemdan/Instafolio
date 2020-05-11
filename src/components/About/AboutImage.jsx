import React from "react";
import "./About.css";
import { myImages } from "./../../api/fake";

const AboutImage = (props) => {
  return (
    <div className="about-image-div">
      <img alt="Hemdan" src={myImages[props.counter]}></img>
    </div>
  );
};

export default AboutImage;

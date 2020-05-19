import React from "react";
import SocialMedia from "./SocialMedia";

import { Fade } from "react-reveal";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <SocialMedia />
      <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
          <p className="footer-text">
            Made with{" "}
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>{" "}
            by Abdallah Hemdan &copy; 2020
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;

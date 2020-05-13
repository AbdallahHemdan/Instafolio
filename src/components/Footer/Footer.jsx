import React, { Component } from "react";
import { socialMedia } from "./../../api/fake";
import { Fade } from "react-reveal";

import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer-main">
        <div className="social-media-div">
          <a
            href={socialMedia.github}
            className="icon-button github"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <i className="fa fa-github"></i>
            <span></span>
          </a>
          <a
            href={socialMedia.linkedin}
            className="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
            <span></span>
          </a>
          <a
            href={`mailto:${socialMedia.gmail}`}
            className="icon-button google"
            target="_blank"
            rel="noopener noreferrer"
            title="Mail"
          >
            <i className="fa fa-envelope"></i>
            <span></span>
          </a>
          <a
            href={socialMedia.facebook}
            className="icon-button facebook"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <i className="fa fa-facebook-f"></i>
            <span></span>
          </a>
          <a
            href={socialMedia.twitter}
            className="icon-button twitter"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <i className="fa fa-twitter"></i>
            <span></span>
          </a>
        </div>
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
}

export default Footer;

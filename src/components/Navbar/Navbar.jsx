import React from "react";
import Fade from "react-reveal/Fade";

import "./Navbar.css";

function Navbar({ onThemeChange, light }) {
  return (
    <>
      <Fade top duration={1500}>
        <div className="nav-main fixed-top">
          <a href="/" className="brand">
            <span className="bracket">{"<"}</span>
            <span className="brand-name">
              <span className="first-name">Abdallah </span>
              <span className="last-name">Hemdan</span>
            </span>
            <span className="bracket">{"/>"}</span>
          </a>
          <input className="items-btn" type="checkbox" id="items-btn" />
          <label className="items-icon" htmlFor="items-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="items">
            <li className="home-item">
              <a href="/#about">Home</a>
            </li>
            <li className="projects-item">
              <a href="/#projects">Projects</a>
            </li>
            <li className="contact-item">
              <a href="/#contact">Contact Me</a>
            </li>
            <li className="contact-item theme-switch" onClick={onThemeChange}>
              {light ? (
                <i className="fa fa-toggle-off"></i>
              ) : (
                <i className="fa fa-toggle-on"></i>
              )}
            </li>
          </ul>
        </div>
      </Fade>
    </>
  );
}

export default Navbar;

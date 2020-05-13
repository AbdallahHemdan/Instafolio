import React, { Component } from "react";
import "./Navbar.css";
import Fade from "react-reveal/Fade";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Fade top duration={1500}>
          <div className="nav-main fixed-top">
            <a href="/#about" className="brand">
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
              <li
                className="contact-item theme-switch"
                onClick={this.props.onThemeChange}
              >
                {this.props.light ? (
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
}

export default Navbar;

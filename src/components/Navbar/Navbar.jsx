import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav-main fixed-top">
        <a href="/" className="brand">
          <span className="bracket"> &lt;</span>
          <span className="brand-name">
            <span className="first-name">Abdallah </span>
            <span className="last-name">Hemdan</span>
          </span>
          <span className="bracket">/&gt;</span>
        </a>
        <input className="items-btn" type="checkbox" id="items-btn" />
        <label className="items-icon" htmlFor="items-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="items">
          <li className="home-item">
            <a href="/">Home</a>
          </li>
          <li className="about-item">
            <a href="#about">About</a>
          </li>
          <li className="projects-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="contact-item">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import Skills from "./../Skills/Skills";
import AboutImage from "./AboutImage";
import { myImages } from "./../../api/fake";
import { Fade } from "react-reveal";
import "./About.css";
import AboutMe from "./AboutMe";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        counter: (this.state.counter + 1) % myImages.length,
      });
    }, 3000);
  }

  render() {
    return (
      <Fade bottom duration={1500} distance="50px">
        <div className="about-container" id="about">
          <div className="about-main">
            <div className="about-text-container">
              <div>
                <AboutMe />
                <Skills />
              </div>
            </div>
            <AboutImage counter={this.state.counter} />
          </div>
        </div>
      </Fade>
    );
  }
}

export default About;

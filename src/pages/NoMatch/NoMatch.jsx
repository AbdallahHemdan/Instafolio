import React, { Component } from "react";
import { Fade } from "react-reveal";

import err404_1 from "./../../assets/images/error404/1.svg";
import err404_2 from "./../../assets/images/error404/2.svg";
import err404_3 from "./../../assets/images/error404/3.svg";
import err404_4 from "./../../assets/images/error404/4.svg";

import "./NoMatch.css";
import Navbar from "./../../components/Navbar/Navbar";
import InstaBtn from "./../../components/InstaBtn/InstaBtn";
import Footer from "../../components/Footer/Footer";

const img = [
  { img: err404_1, clr: "primary" },
  { img: err404_2, clr: "danger" },
  { img: err404_3, clr: "success" },
  { img: err404_4, clr: "warning" },
];
class NoMatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      img,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        counter: (this.state.counter + 1) % this.state.img.length,
      });
    }, 5000);
  }

  handleBackToHome = () => {
    window.location = "/";
  };

  render() {
    return (
      <div className="container-lg">
        <Navbar
          onThemeChange={this.props.onThemeChange}
          light={this.props.light}
        />
        <Fade left duration={1000} distance="90%">
          <div className="error-404">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ghost"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="svg-inline--fa fa-ghost fa-w-12 error-img"
              data-v-d5ea9138=""
            >
              <path
                fill="currentColor"
                d="M186.1.09C81.01 3.24 0 94.92 0 200.05v263.92c0 14.26 17.23 21.39 27.31 11.31l24.92-18.53c6.66-4.95 16-3.99 21.51 2.21l42.95 48.35c6.25 6.25 16.38 6.25 22.63 0l40.72-45.85c6.37-7.17 17.56-7.17 23.92 0l40.72 45.85c6.25 6.25 16.38 6.25 22.63 0l42.95-48.35c5.51-6.2 14.85-7.17 21.51-2.21l24.92 18.53c10.08 10.08 27.31 2.94 27.31-11.31V192C384 84 294.83-3.17 186.1.09zM128 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                data-v-d5ea9138=""
              ></path>
            </svg>
            <div className="back-msg">
              <h1 className="lost center-text">Are you lost ?</h1>
              <p className="not-found">Sorry, we couldn't find this page</p>
            </div>
            <InstaBtn
              text={"Back to Home"}
              className="project-button bck"
              href="/"
              style={{ margin: "0 auto" }}
            />
          </div>
        </Fade>
        <Footer />
      </div>
    );
  }
}

export default NoMatch;

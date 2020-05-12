import React, { Component } from "react";
import err404_1 from "./../../assets/images/error404/1.svg";
import err404_2 from "./../../assets/images/error404/2.svg";
import err404_3 from "./../../assets/images/error404/3.svg";
import err404_4 from "./../../assets/images/error404/4.svg";

import "./NoMatch.css";

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
        <div className="error-404">
          <img
            src={this.state.img[this.state.counter].img}
            alt="error 404"
            className="error-img"
            srcSet=""
          />
          <button
            type="button"
            className={`btn btn-${
              this.state.img[this.state.counter].clr
            } btn-block back-btn`}
            onClick={this.handleBackToHome}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
}

export default NoMatch;

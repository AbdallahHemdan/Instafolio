import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Projects from "./../../components/Projects/Projects";
import ContactMe from "./../../components/ContactMe/ContactMe";
import Footer from "./../../components/Footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Navbar />
        <About />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default Home;

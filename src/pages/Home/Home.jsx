import React from "react";

import About from "../../components/About/About";
import Projects from "./../../components/Projects/Projects";
import ContactMe from "./../../components/ContactMe/ContactMe";
import Footer from "./../../components/Footer/Footer";

function Home(props) {
  return (
    <div className="home">
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;

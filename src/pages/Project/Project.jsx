import React, { Component } from "react";
import ProjectCard from "./../../components/ProjectCard/ProjectCard";
import Footer from "./../../components/Footer/Footer";
import qs from "qs";

import { withRouter, Redirect } from "react-router-dom";
import { projectsCards } from "./../../api/fake";
import { Fade } from "react-reveal";

import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).id,
      projectDetails: {},
      detailsIsLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ projectDetails: projectsCards[this.state.id] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.projectDetails !== this.state.projectDetails) {
      this.setState({ detailsIsLoaded: true });
    }
  }

  render() {
    if (this.state.id > projectsCards.length) {
      return <Redirect to="/no-match" />;
    }
    const {
      title,
      subtitle,
      image,
      footerLink,
      language,
      stars,
      forks,
    } = this.state.projectDetails;
    return (
      <div className="project">
        {this.state.detailsIsLoaded ? (
          <div className="project-main">
            <Fade left duration={1000}>
              <div className="project-header">
                <h1 className="heading project-heading">
                  {this.state.projectDetails.title}
                </h1>
                <p className="project-subtitle">
                  {`> ${this.state.projectDetails.subtitle}`}
                </p>
              </div>
            </Fade>
            <Fade bottom duration={1000}>
              <div className="limit-card">
                <ProjectCard
                  cardInfo={{
                    title,
                    description: subtitle,
                    image,
                    footer: footerLink,
                    language,
                    stars,
                    forks,
                  }}
                  full={true}
                />
              </div>
            </Fade>
          </div>
        ) : null}
        <Fade left duration={1000}>
          <Footer />
        </Fade>
      </div>
    );
  }
}

export default withRouter(Project);

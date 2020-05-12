import React, { Component } from "react";
import ProjectCard from "./../ProjectCard/ProjectCard";
import InstaBtn from "./../InstaBtn/InstaBtn";

import { projectsCards } from "./../../api/fake";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fade left duration={1000} distance="70px">
        <div className="virtual-projects" id="projects"></div>
        <div className="projects-main" id="projects">
          <div className="project-main-div">
            <div className="project-header">
              <h1 className="heading project-heading">Main Projects</h1>
              <p className="project-subtitle">
                LIST OF MY OPEN SOURCE PROJECTS
              </p>
            </div>
            <div className="project-cards-div">
              {projectsCards.map((card, index) => {
                return (
                  <Link
                    to={`/project/?id=${index}`}
                    className="project-link"
                    key={index}
                  >
                    <ProjectCard
                      cardInfo={{
                        title: card.title,
                        description: card.subtitle,
                        image: card.image,
                        footer: card.footerLink,
                        language: card.language,
                        stars: card.stars,
                        forks: card.forks,
                      }}
                      full={false}
                    />
                  </Link>
                );
              })}
            </div>
            <InstaBtn
              text={"More Projects"}
              className="project-button"
              href="https://github.com/AbdallahHemdan"
              newTab={true}
            />
          </div>
        </div>
      </Fade>
    );
  }
}

export default Projects;

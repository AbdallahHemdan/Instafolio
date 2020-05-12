import React, { Component } from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectBasicInfo from "./ProjectBasicInfo";
import "./ProjectCard.css";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cardInfo, full } = this.props;
    return (
      <div className="proj-card">
        <ProjectBasicInfo cardInfo={cardInfo} full={full} />
        {this.props.full ? (
          <ProjectDetails cardInfo={cardInfo} full={full} />
        ) : null}
      </div>
    );
  }
}

export default ProjectCard;

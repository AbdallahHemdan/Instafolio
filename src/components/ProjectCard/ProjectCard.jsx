import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectBasicInfo from "./ProjectBasicInfo";
import "./ProjectCard.css";

function ProjectCard({ cardInfo, full }) {
  return (
    <div className="proj-card">
      <ProjectBasicInfo cardInfo={cardInfo} full={full} />
      {full ? <ProjectDetails cardInfo={cardInfo} full={full} /> : null}
    </div>
  );
}

export default ProjectCard;

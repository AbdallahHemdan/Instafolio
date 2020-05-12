import React from "react";
import "./ProjectCard.css";

const ProjectBasicInfo = ({ cardInfo, full }) => {
  return (
    <>
      <div className="proj-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="proj-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        {full ? <p className="card-subtitle">{cardInfo.description}</p> : null}
      </div>
    </>
  );
};

export default ProjectBasicInfo;

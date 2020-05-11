import React, { Component } from "react";
import "./ProjectCard.css";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  };
  render() {
    const { cardInfo } = this.props;
    return (
      <div className="proj-card">
        <div className="proj-image-div">
          <img src={cardInfo.image} alt="PWA" className="card-image"></img>
        </div>
        <div className="proj-detail-div">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-subtitle">{cardInfo.description}</p>
        </div>
        <div className="proj-card-footer">
          {cardInfo.footer.map((info, index) => {
            return (
              <p onClick={() => this.openInNewTab(info.url)} key={index}>
                <i className="fa fa-github github-logo"></i>
                <span>{info.name}</span>
              </p>
            );
          })}
        </div>
        <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div
                className="language-color"
                style={{
                  backgroundColor:
                    cardInfo.language === "JavaScript"
                      ? "yellow"
                      : cardInfo.language === "Cpp"
                      ? "#F34B7D"
                      : "gray",
                }}
              ></div>
              <p>{cardInfo.language}</p>
            </span>
            <span>
              <svg
                aria-hidden="true"
                className="octicon repo-star-svg"
                height="16"
                role="img"
                viewBox="0 0 14 16"
                width="14"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                ></path>
              </svg>
              <p>{cardInfo.stars}</p>
            </span>
            <span>
              <svg
                aria-hidden="true"
                className="octicon repo-star-svg"
                height="16"
                role="img"
                viewBox="0 0 10 16"
                width="10"
                fill="rgb(106, 115, 125)"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{cardInfo.forks}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;

import React from "react";
import "./InstaBtn.css";

const InstaBtn = ({ text, className, href, newTab }) => {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
};

export default InstaBtn;

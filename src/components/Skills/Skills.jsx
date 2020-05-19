import React from "react";
import { mySkills } from "./../../api/fake";
import "./Skills.css";

function Skills(props) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {mySkills.map((skill, index) => {
          return (
            <li
              className="software-skill-inline"
              name={skill.skillName}
              title={skill.skillName}
              key={index}
            >
              <i className={skill.class}></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;

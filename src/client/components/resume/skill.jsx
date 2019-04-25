import React from "react";
import SkillItem from "./skillItem";

const Skill = props => {
  let { skill_title, skill_content, skill_description } = props.content;
  skill_content = Object.keys(skill_content).map((key, j) => {
    return <SkillItem key={`${key}-${j}`} id={key} item={skill_content[key]} />;
  });

  return (
    <div className="row skill">
      <div className="three columns header-col">
        <h3>
          <span>{skill_title}</span>
        </h3>
      </div>

      <div className="nine columns main-col">
        <p>{skill_description}</p>
        {skill_content}
      </div>
    </div>
  );
};

export default Skill;

import React from "react";

const SkillItem = props => {
  let { id, item } = props;
  let skill_content = item.map((skill, i) => {
    return (
      <li key={skill.toLowerCase()}>
        <span className={`bar-expand ${skill.toLowerCase()}`} />
        <em>{skill}</em>
      </li>
    );
  });
  return (
    <div className="bars">
      <div className="twelve columns">
        <h4>{id}</h4>
      </div>
      <div className="twelve columns">
        <ul className="skills">{skill_content}</ul>
      </div>
    </div>
  );
};

export default SkillItem;

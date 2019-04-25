import React from "react";
import Education from "./education";
import Work from "./work";
import Skill from "./skill";

const Resume = props => {
  return (
    <section id="resume">
      <Education content={props.language} />
      <Work content={props.language} />
      <Skill content={props.language} />
    </section>
  );
};

export default Resume;

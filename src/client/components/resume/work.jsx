import React from "react";
import TagsRow from "./tags/tags";

const Work = props => {
  let { work_title, work_content } = props.content;
  work_content = Object.keys(work_content).map((key, j) => {
    return [...Array(work_content[key])].map((values, i) => {
      const { company, content } = values;
      const { position, date_from, date_to, descriptions } = content;
      return (
        <div className="row item" key={`${company}-${i}`}>
          <div className="twelve columns">
            <h3>{company}</h3>
            <p className="info">{position}</p>
            <p className="info">{`${date_from}-${date_to}`}</p>
            <TagsRow descriptions={descriptions} />
            <br />
          </div>
        </div>
      );
    });
  });

  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>{work_title}</span>
        </h1>
      </div>
      <div className="nine columns main-col">{work_content}</div>
    </div>
  );
};

export default Work;

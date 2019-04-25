import React from "react";

const Work = props => {
  let { work_title, work_content } = props.content;
  work_content = Object.keys(work_content).map((key, j) => {
    return [...Array(work_content[key])].map((values, i) => {
      const { company, content } = values;
      const { position, date_from, date_to, description } = content;
      return (
        <div className="row item" key={`${company}-${i}`}>
          <div className="twelve columns">
            <h3>{company}</h3>
            <p className="info">
              {position} <span>&bull;</span>{" "}
              <em className="date">{`${date_from}-${date_to}`}</em>
            </p>
            <p>{description}</p>
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

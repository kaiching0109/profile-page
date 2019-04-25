import React from "react";

const Education = props => {
  let { education_title, education_content } = props.content;
  education_content = Object.keys(education_content).map((key, j) => {
    return [...Array(education_content[key])].map((values, i) => {
      const { school, content } = values;
      const { degree, date_from, date_to, description } = content;
      return (
        <div className="row item" key={`${school}-${i}`}>
          <div className="twelve columns">
            <h3>{school}</h3>
            <p className="info">
              {degree} <span>&bull;</span>{" "}
              <em className="date">{`${date_from}-${date_to}`}</em>
            </p>
            <p>{description}</p>
          </div>
        </div>
      );
    });
  });

  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>{education_title}</span>
        </h1>
      </div>
      <div className="nine columns main-col">{education_content}</div>
    </div>
  );
};

export default Education;

import React from "react";

const Tags = props => {
  let { descriptions } = props;
  descriptions = descriptions.map((description, i) => {
    return (
      <span className="categories">
        <i className="fa fa-tag" />
        {description}{" "}
      </span>
    );
  });
  return <div className="twelve columns collapsed">{descriptions} </div>;
};

export default Tags;

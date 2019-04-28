import React from "react";
import style from "./style.css";

const Tags = props => {
  let { descriptions } = props;
  descriptions = descriptions.map((description, i) => {
    return (
      <li key={i} className="tag">
        {description}
      </li>
    );
  });

  return (
    <div className="tags">
      <ul>{descriptions}</ul>
    </div>
  );
};

export default Tags;

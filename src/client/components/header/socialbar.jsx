import React from "react";
const Socialbar = props => {
  let { items } = props;
  const socialbarContent = items.map(({ label, link }, i) => {
    return (
      <li key={`${label.toLowerCase()}-i`}>
        <a href={`${link}`}>
          <i className={`fa fa-${label}`} />
        </a>
      </li>
    );
  });
  return <ul className="social">{socialbarContent}</ul>;
};
export default Socialbar;

import React from "react";
const Navbar = props => {
  let { items, language } = props;
  const navbarContent = items.map(({ label, id }, i) => {
    console.log(i);
    const classname = i === 0 ? "current" : "smoothscroll";
    return (
      <li className={classname} key={`${id}-i`}>
        <a className="smoothscroll" href={`#${id}`}>
          {language[id]}
        </a>
      </li>
    );
  });
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        {navbarContent}
      </ul>
      <ul>
        <li>
          <a
            className="mobile-btn"
            href="#"
            onClick={() => {
              props.languageHandler("jp");
            }}
          >
            日本語
          </a>
        </li>
        <li>
          <a
            className="mobile-btn"
            href="#"
            onClick={() => {
              props.languageHandler("en");
            }}
          >
            English
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

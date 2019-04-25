import React from "react";

const Portfolio = props => {
  let { work_details_title, work_details_content } = props.language;
  let popups = [];
  let items = [];
  work_details_content.forEach((item, i) => {
    const { company, id, description, link, tag } = item;
    // const { company, id, description } = _;
    items.push(
      <div className="columns portfolio-item" key={`item-${i}`}>
        <div className="item-wrap">
          <a href={`#modal-${i}`} title="">
            <img alt="" src={`/images/portfolio/${id}.jpg`} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5 />
                <p>{company}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="icon-plus" />
            </div>
          </a>
        </div>
      </div>
    );
    popups.push(
      <div id={`modal-${i}`} className="popup-modal mfp-hide" key={`pop-${i}`}>
        <img
          className="scale-with-grid"
          src={`images/portfolio/modals/m-${id}.jpg`}
          alt=""
        />

        <div className="description-box">
          <h4>{`${company}`}</h4>
          <p>{`${description}`}</p>
          <span className="categories">
            <i className="fa fa-tag" />
            {tag}
          </span>
        </div>

        <div className="link-box">
          <a href={link}>link</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>
    );
  });
  //

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{`${work_details_title}`}</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {items}
          </div>
        </div>
        {popups}
      </div>
    </section>
  );
};

export default Portfolio;

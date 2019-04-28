import React from "react";

const About = props => {
  const {
    about_title,
    about_description,
    contact_title,
    name,
    address1,
    address2,
    address3,
    phone,
    mail,
    download_resume,
    resume_link
  } = props.language;
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>{about_title}</h2>

          <p>{about_description}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>{contact_title}</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {address1}
                  <br />
                  {address2}
                  <br />
                  {address3}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{mail}</span>
              </p>
            </div>

            <div className="columns download">
              <p>
                <a download={resume_link} href="/docs" className="button">
                  <i className="fa fa-download" />
                  {download_resume}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

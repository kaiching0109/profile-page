import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      contactName,
      contactEmail,
      contactSubject,
      contactMessage
    } = this.state;
    const {
      header,
      name,
      email,
      subject,
      message,
      response,
      mandotory,
      error,
      success,
      description
    } = this.props.language.contactus;
    console.log(contactName, contactEmail, contactSubject, contactMessage);
    if (contactName === "" || contactEmail === "" || contactMessage === "") {
      alert(mandotory);
    } else {
      axios
        .post("/api/mail", {
          contactName: contactName,
          contactEmail: contactEmail,
          contactSubject: contactSubject,
          contactMessage: contactMessage
        })
        .then(response => {
          if (response) {
            const { err, message } = response.data;
            if (err) message = err;
            if (message) message = response;
            alert(message);
            this.setState({
              contactName: "",
              contactEmail: "",
              contactSubject: "",
              contactMessage: ""
            });
          } else alert(error);
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  render() {
    const {
      header,
      name,
      email,
      subject,
      message,
      response,
      mandotory,
      error,
      success,
      submit,
      description
    } = this.props.language.contactus;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>{header}</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{description}</p>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    {name} <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    value={this.state.contactName}
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    {email} <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    value={this.state.contactEmail}
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">{subject}</label>
                  <input
                    type="text"
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={this.handleChange}
                    value={this.state.contactSubject}
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    {message} <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    onChange={this.handleChange}
                    value={this.state.contactMessage}
                  />
                </div>

                <div>
                  <button className="submit" onClick={this.handleSubmit}>
                    {submit}
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> {error}</div>

            <div id="message-success">
              <i className="fa fa-check" />
              {success}
              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

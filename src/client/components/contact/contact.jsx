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
    console.log(contactName, contactEmail, contactSubject, contactMessage);
    if (contactName === "" || contactEmail === "" || contactMessage === "") {
      alert("You have to fill in all the mandotory fields");
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
            alert(message);
            this.setState({
              contactName: "",
              contactEmail: "",
              contactSubject: "",
              contactMessage: ""
            });
          } else
            alert(
              "Somthing went wrong.. Please contact the admin kaiching0109@gmail.com for further assistence."
            );
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
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
                    Email <span className="required">*</span>
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
                  <label htmlFor="contactSubject">Subject</label>
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
                    Message <span className="required">*</span>
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
                    Submit
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>

            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Jonathan Doe
                <br />
                1600 Amphitheatre Parkway <br />
                Mountain View, CA 94043 US
                <br />
                <span>(123) 456-7890</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>

              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

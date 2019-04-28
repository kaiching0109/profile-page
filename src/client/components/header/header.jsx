import React, { Component } from "react";
import Navbar from "./navbar";
import Socialbar from "./socialbar";
export default class Header extends Component {
  state = {
    navbar: [
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Resume", id: "resume" },
      { label: "Portfolio", id: "portfolio" },
      { label: "Contact", id: "contact" }
    ],
    socialbar: [
      {
        label: "facebook",
        link: "https://www.facebook.com/profile.php?id=100010477720183"
      },
      {
        label: "linkedin",
        link: "https://www.linkedin.com/in/kai-ching-suen-243384156/"
      },
      { label: "instagram", link: "https://www.instagram.com/kaiching/" },
      { label: "skype", link: "" },
      { label: "github", link: "https://github.com/kaiching0109/" }
    ],
    title: "I'm Kai Ching Suem"
  };

  render() {
    let { navbar, socialbar, title } = this.state;

    return (
      <React.Fragment>
        <header id="home">
          <Navbar
            items={navbar}
            language={this.props.language}
            languageHandler={this.props.languageHandler}
          />

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                {this.props.language.title}
              </h1>
              <h3> {this.props.language.description}.</h3>
              <h3>{this.props.language.description_detail}</h3>
              <hr />
              <Socialbar items={socialbar} language={this.props.language} />
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}

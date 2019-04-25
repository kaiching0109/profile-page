import React, { Component } from "react";
import EN from "../../languages/en.json";
import JP from "../../languages/jp.json";
import Header from "../header/header";
import About from "../about/about";
import Resume from "../resume/resume";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";

export default class SiteBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "jp"
    };
  }

  handleLanguage = id => {
    this.setState({
      language: id
    });
    console.log(this.state.language);
  };

  render() {
    let language;
    switch (this.state.language) {
      case "en":
        language = EN;
        break;
      case "jp":
        language = JP;
    }

    return (
      <React.Fragment>
        <Header language={language} languageHandler={this.handleLanguage} />
        <About language={language} />
        <Resume language={language} />
        <Portfolio language={language} />
        <Contact language={language} />
      </React.Fragment>
    );
  }
}

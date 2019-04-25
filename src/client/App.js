import React, { Component } from "react";
// import "./app.css";
import ReactImage from "./react.png";
import SiteBuilder from "./components/siteBuilder/siteBuilder";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteBuilder />
      </div>
    );
  }
}
export default App;

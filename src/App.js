import React, { Component } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
// import Score from "./components/Score";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Music To My Ears" />
        <BackgroundImage />
        {/* <div className="container">
          <Score />
        </div> */}
      </div>
    );
  }
}

export default App;

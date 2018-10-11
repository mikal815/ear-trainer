import React, { Component } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import BackgroundImage from "./components/BackgroundImage";
import PlayBox from "./components/PlayBox";

import "react-piano/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <BackgroundImage />
        <Keyboard />
        <PlayBox />
      </div>
    );
  }
}

export default App;

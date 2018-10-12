import React, { Component } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import BackgroundImage from "./components/BackgroundImage";
import PlayBox from "./components/PlayBox";

import Tone from "tone";

import "react-piano/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    synth: new Tone.Synth().toMaster()
  };

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


componentDidMount = () => {
  this.toneRowTester()
}

  toneRowTester = () => {
    const toneArray = [
      "C3",
      "D3",
      "E3",
      "F3",
      "G3",
      "A4",
      "B4",
      "C#3",
      "D#3",
      "F#3",
      "G#3",
      "A#4"
    ];
    let tempArray = this.shuffle(toneArray);
    for (var i=0;i<tempArray;i++) {
    this.synth.triggerAttack(i)
    }
  }

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

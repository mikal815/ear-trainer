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
    currentSong: []
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
    console.log("it continues to go");
    const toneArray = [
      "C3",
      "D3",
      "E3",
      "F3",
      "G3",
      "A3",
      "B3",
      "C#3",
      "D#3",
      "F#3",
      "G#3",
      "A#3"
    ];
    var synth = new Tone.Synth().toMaster()
    let tempArray = this.shuffle(toneArray);
    console.log(tempArray)
    var n = 1
    for (var i=0;i<tempArray.length;i++) {
      console.log(tempArray[i])
    synth.triggerAttackRelease(tempArray[i], 0.5, n)
    n++
    }
    this.setState({ currentSong: tempArray})
  }

  repeatSong() {
    var n = 1
    var synth = new Tone.Synth().toMaster()
    for (var i=0;i<this.setState.currentSong.length;i++) {
      console.log(this.setState.currentSong[i])
    synth.triggerAttackRelease(this.setState.currentSong[i], 0.5, n)
    n++
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

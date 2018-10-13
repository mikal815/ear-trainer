import React, { Component } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import BackgroundImage from "./components/BackgroundImage";
import PlayBox from "./components/PlayBox";

import Tone from "tone";

import { Container, Row, Col } from "./components/Grid";

import "react-piano/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {

  constructor() {
    super()
 this.scoreFunction = this.scoreFunction.bind(this)
}
  state = {
    winstate: "",
    score: 0,
    currentSong: [],
    currentInput: []
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


  scoreFunction = (x) => {
    console.log(x)
    this.setState(prevState => ({
     currentInput: [...prevState.currentInput, x],
     winstate: ""
    }), () => {
      var y = this.state.currentInput.length - 1
      console.log(this.state.currentInput[y], this.state.currentSong[y])
      if (this.state.currentInput[y] === this.state.currentSong[y]) {
        if (this.state.currentInput.length === this.state.currentSong.length){
        this.toneRowTester()
        this.setState(prevState => ({
          score: this.state.score + 1,
          currentInput: [],
          winstate: "Success!"
         }) )
        }
        else {
      }
    }
      else {
        // alert("Wrong Note!");
        this.setState(prevState => ({
          currentInput: [],
          winstate: "Wrong Note!"
         }))
      }
    })
    
  }


class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header winstate={this.state.winstate} score={this.state.score}/>
        <BackgroundImage />
        <Keyboard scorekeeper={this.scoreFunction}/>
        <Container>
          <Row>
            <Col size="lg-4">
                <PlayBox />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

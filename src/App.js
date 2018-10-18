import React, { Component } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import BackgroundImage from "./components/BackgroundImage";
import PlayBox from "./components/PlayBox";
import { Container, Row, Col } from "./components/Grid";

import Tone from "tone";

import "react-piano/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  
  constructor() {
    super()
    this.scoreFunction = this.scoreFunction.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.countDown = this.countDown.bind(this);
  }
  state = {
    winstate: "",
    score: 0,
    timer: 0,
    countdown: 120,
    currentSong: [],
    currentInput: [],
    winSize: window.innerWidth,
    fullKeyboardArray: [
      "C3",
      "C#3",
      "D3",
      "D#3",
      "E3",
      "F3",
      "F#3",
      "G3",
      "G#3",
      "A3",
      "A#3",
      "B3",
      "C4",
      "C#4",
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4"
    ]
  };
  
  //Component mount/unmount functions
  
  componentDidMount = () => {
    // this.toneRowTester()
    console.log(this.state.width);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  //Handles responsive piano

  updateDimensions() {
    this.setState({
      winSize: window.innerWidth
    });
  }

  //Handles timer

  startTimer() {
    this.setState({
      countdown: 120
    });
    this.timer = setInterval(this.timerFunction, 1000);
  }

  timerFunction = () => {
    let countdownTimer = (this.state.countdown - 1)/1000;
    this.setState({
      countdown: countdownTimer,
    });
    

    if (this.state.countdown === 0) { 
      clearInterval(this.timer);
      // this.highScoreFunction()
    }
  }

    // Song generator functions

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
  
  songGeneratorEasy = () => {
    const toneArray = this.fullKeyboardArray.slice(0,11);
    var synth = new Tone.Synth().toMaster()
    let tempArray = this.shuffle(toneArray);
    let tempArray2 = tempArray.slice(0,1)
    console.log(tempArray2)
    var n = 1
    for (var i=0;i<tempArray2.length;i++) {
      console.log(tempArray2[i])
      synth.triggerAttackRelease(tempArray2[i], 0.5, n)
      n++
    }
    this.setState({ currentSong: tempArray2})
  }

  songGeneratorArpeggio = () => {
    let baseNote = Math.floor(Math.random() * 11)
    let toneArray = [
    this.fullKeyboardArray[baseNote],
    this.fullKeyboardArray[baseNote + 4],
    this.fullKeyboardArray[baseNote + 7]]
    var synth = new Tone.Synth().toMaster()
    toneArray.push()
    console.log(toneArray)
    var n = 1
    for (var i=0;i<toneArray.length;i++) {
      console.log(toneArray[i])
      synth.triggerAttackRelease(toneArray[i], 0.5, n)
      n++
    }
    this.setState({ currentSong: toneArray})
  }

  songGeneratorHard = () => {
    const toneArray = this.fullKeyboardArray.slice(0,11);
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

  //So, plan right now is to have the appropriate songGenerator function fire when a level is selected
  //Additionally, a timer goes off, and you have to see how many you can complete in, say, 2 minutes.
  //I'd prefer a system based on number of mistakes, but timer-based methods would probably work better
  //With the musically illiterate industry pros we'll be presenting to.
  //Once the timer hits zero, the user's score is added to the database, a modal pops up that shows their
  //relative ranking (three above, three below). Boom, app's functional, everybody goes home happy
  

  //Currently not in use, but will probably incorporate into later model.
  repeatSong() {
    var n = 1
    var synth = new Tone.Synth().toMaster()
    for (var i=0;i<this.setState.currentSong.length;i++) {
      console.log(this.setState.currentSong[i])
      synth.triggerAttackRelease(this.setState.currentSong[i], 0.5, n)
      n++
    }
  }
  
  //Score function. Self explanatory
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
        this.setState(prevState => ({
          currentInput: [],
          winstate: "Wrong Note!"
        }))
      }
    })
    
  }
  render() {
    return (
      <div>
      <Header winstate={this.state.winstate} score={this.state.score} timer={this.state.timer}>
      </Header>
      <BackgroundImage />
      <Keyboard width={this.state.winSize} scorekeeper={this.scoreFunction}/>
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
  
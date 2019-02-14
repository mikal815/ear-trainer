import React, { Component } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import BackgroundImage from "./components/BackgroundImage";
// import PlayBox from "./components/PlayBox";
import { Container, Row, Col } from "./components/Grid";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import Tone from "tone";

import "react-piano/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.scoreFunction = this.scoreFunction.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.timerFunction = this.timerFunction.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.toggle = this.toggle.bind(this);
    this.selectFunction = this.selectFunction.bind(this);
    this.highScoreFunction = this.highScoreFunction.bind(this);
    this.modeHandler = this.modeHandler.bind(this);
  }
  state = {
    username: null,
    winstate: "",
    score: 0,
    timer: 0,
    dropdownOpen: false,
    countdown: 120,
    currentSong: [],
    currentInput: [],
    currentMode: "",
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
    console.log(this.state.width);
    window.addEventListener("resize", this.updateDimensions);
  };

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
    clearInterval(this.timer);
    this.setState({
      countdown: 90
    });
    this.timer = setInterval(this.timerFunction, 1000);
  }

  timerFunction = () => {
    let countdownTimer = this.state.countdown - 1;
    this.setState({
      countdown: countdownTimer
    });
    if (this.state.countdown === 0) {
      clearInterval(this.timer);
      this.highScoreFunction();
      this.setState({
        countdown: 120,
        currentSong: []
      });
    }
  };

  //Handles dropdown
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  selectFunction = event => {
    this.setState({ score: 0 });
    // console.log(event.target.value);
    this.setState({
      currentMode: event.target.value
    });
    this.modeHandler(event.target.value);
    if (event.target.value !== "Freeplay") {
      this.startTimer();
    } else {
      clearInterval(this.timer);
      this.setState({
        currentMode: "",
        countdown: 120
      });
    }
  };

  modeHandler(mode) {
    console.log(this.state.username)
    this.setState({score: 0})
    switch(mode) {
      case "Intervals":
        this.songGeneratorEasy();
        break;
      case "ArpeggiosMajor":
        this.songGeneratorArpeggio();
        break;
      case "Tonerows":
        this.songGeneratorHard();
        break;
      default:
      this.setState({score: 0})
        break;
    }
  }

  modeHandler2(mode) {
    console.log(this.state.username)
    this.setState({score: 0})
    switch(mode) {
      case "Intervals":
        this.songGeneratorEasy();
        break;
      case "ArpeggiosMajor":
        this.songGeneratorArpeggio();
        break;
      case "Tonerows":
        this.songGeneratorHard();
        break;
      default:
        break;
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
    const toneArray = this.state.fullKeyboardArray.slice(1, 13);
    console.log(toneArray);
    var synth = new Tone.Synth({
      oscillator: {
        type: "triangle",
        modulationFrequency: 0.2
      },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.2,
        release: 0.3
      }
    }).toMaster();
    let tempArray = this.shuffle(toneArray);
    let tempArray2 = ["C3", tempArray[1]];
    console.log(tempArray2);
    var n = 1;
    for (var i = 0; i < tempArray2.length; i++) {
      console.log(tempArray2[i]);
      var m = "+" + n;
      console.log(m);
      synth.triggerAttackRelease(tempArray2[i], 1, m);
      n = n + 1;
    }
    this.setState({ currentSong: tempArray2 });
  };

  songGeneratorArpeggio = () => {
    let baseNote = Math.floor(Math.random() * 11);
    let toneArray = [
      this.state.fullKeyboardArray[baseNote],
      this.state.fullKeyboardArray[baseNote + 4],
      this.state.fullKeyboardArray[baseNote + 7]
    ];
    var synth = new Tone.Synth({
      oscillator: {
        type: "triangle",
        modulationFrequency: 0.2
      },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.2,
        release: 0.3
      }
    }).toMaster();
    toneArray.push();
    console.log(toneArray);
    var n = 1;
    for (var i = 0; i < toneArray.length; i++) {
      var m = "+" + n;
      console.log(m);
      console.log(toneArray[i]);
      synth.triggerAttackRelease(toneArray[i], 1, m);
      n = n + 1;
    }
    this.setState({ currentSong: toneArray });
  };

  songGeneratorHard = () => {
    const toneArray = this.state.fullKeyboardArray.slice(0, 12);
    var synth = new Tone.Synth({
      oscillator: {
        type: "triangle",
        modulationFrequency: 0.2
      },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.2,
        release: 0.3
      }
    }).toMaster();
    let tempArray = this.shuffle(toneArray);
    console.log(tempArray);
    var n = 1;
    for (var i = 0; i < tempArray.length; i++) {
      var m = "+" + n;
      console.log(m);
      console.log(tempArray[i]);
      synth.triggerAttackRelease(tempArray[i], 1, m);
      n = n + 1;
    }
    this.setState({ currentSong: tempArray });
  };

  //Currently not in use, but will probably incorporate into later model.
  repeatSong() {
    var n = 1;
    var synth = new Tone.Synth().toMaster();
    for (var i = 0; i < this.setState.currentSong.length; i++) {
      console.log(this.setState.currentSong[i]);
      synth.triggerAttackRelease(this.setState.currentSong[i], 0.5, n);
      n++;
    }
  }

  //Score function. Self explanatory
  scoreFunction = (x) => {
    if (this.state.currentMode === "") {

      this.setState({
      currentInput: [],
      winstate: ""
    })
  }
    else {
    console.log(x)
    this.setState(prevState => ({
      currentInput: [...prevState.currentInput, x],
      winstate: ""
    }), () => {
        var y = this.state.currentInput.length - 1;
        console.log(this.state.currentInput[y], this.state.currentSong[y]);
        if (this.state.currentInput[y] === this.state.currentSong[y]) {
          if (
            this.state.currentInput.length === this.state.currentSong.length
          ) {
            this.setState(prevState => ({
              score: this.state.score + 1,
              currentInput: [],
              winstate: "Success!"
            }));

            setTimeout(this.modeHandler2(this.state.currentMode), 3000);
          } 
        } else {
          this.setState(prevState => ({
            currentInput: [],
            winstate: "Wrong Note!"
          }));
        }
    })
  }
}


  usernameRetriever = (username) => {
    var user = username
    console.log(user)
    this.setState({username: user})  
  }

  highScoreFunction() {
    var score = this.state.score;
    var username = this.state.username;
    axios.post("/user/scores" + this.state.currentMode, {
      username: username,
      score: score}).then(function (response) {  
        console.log(this.state.currentMode)
        switch(this.state.currentMode) {
          case "Intervals":
            var scoreArr = response.data.scoreArrIntervals
            console.log(scoreArr)
            break;
          case "ArpeggiosMajor":
            var scoreArr = response.data.scoreArrArpeggiosMajor
            console.log(scoreArr)
            break;
          case "Tonerows":
            var scoreArr = response.data.scoreArrTonerows
            console.log(scoreArr)
            break;
          default:
            var scoreArr = []
            console.log(scoreArr)
            break;
        }
        console.log(scoreArr)
        var hiscore = Math.max.apply(null, scoreArr)
        console.log(hiscore)
        this.setState({ winstate: "Best Score: " + hiscore, currentMode: "", });}.bind(this)
    ).catch(error => {
      console.log(error.response)
  })
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
        <Header
          branding="Music To My Ears"
          winstate={this.state.winstate}
          score={this.state.score}
          timer={this.state.countdown}
          callbackFromParent={this.usernameRetriever}
        >
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Mode</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value={"Freeplay"} onClick={this.selectFunction}>
                Free Play
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem value={"Intervals"} onClick={this.selectFunction}>
                Intervals
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                value={"ArpeggiosMajor"}
                onClick={this.selectFunction}
              >
                Major Arpeggio
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem value={"Tonerows"} onClick={this.selectFunction}>
                Tone Rows
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Header>
        <BackgroundImage />
        <Keyboard width={this.state.winSize} scorekeeper={this.scoreFunction} />
        <Container>
          <Row>
            <Col size="lg-4">
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

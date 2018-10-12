import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import Header from './components/Header'
import 'react-piano/dist/styles.css';
import './App.css';

class App extends Component {
  state = {
    currentSong: []
  }

  componentDidMount = () => {
    this.toneRowGenerator()
  }

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

  toneRowGenerator = () => {
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
    this.setState({ currentSong: tempArray})
  }

  


  render() {
    return (
      <Keyboard></Keyboard>
    );
  }
}



export default App;

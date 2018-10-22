import React from "react";
import Tone from "tone";
import { Piano,  MidiNumbers } from "react-piano";

const firstNote = MidiNumbers.fromNote("c3");
const lastNote = MidiNumbers.fromNote("c5");


var synth = new Tone.Synth({
	"oscillator" : {
		"type" : "triangle",
		"modulationFrequency" : 0.5
	},
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.1,
		"sustain" : 0.2,
		"release" : 0.3,
	}
}).toMaster();

const Keyboard = props => (
  <div className="container" style={{ width: "100%", height: "auto", margin: 0, padding: "0" }}>
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={midiNumber => {
        var x = Tone.Frequency(midiNumber, "midi").toNote();
        synth.triggerAttack(x);
        // Play a given note - e notes below
      }}
      onPlayNoteInput={midiNumber => {
        var x = Tone.Frequency(midiNumber, "midi").toNote();
        props.scorekeeper(x);
      }}
      stopNote={midiNumber => {
        synth.triggerRelease();
      }}
      width={props.width}
    />
  </div>
);

export default Keyboard;
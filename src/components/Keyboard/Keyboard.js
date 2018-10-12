import React from "react";
import Tone from "tone";
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';

function Keyboard() {
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  
  var synth = new Tone.Synth().toMaster()
 
  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        var x = Tone.Frequency(midiNumber, "midi").toNote()
        synth.triggerAttack(x);
        // Play a given note - e notes below
      }}
      stopNote={(midiNumber) => {
        synth.triggerRelease();
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
}

export default Keyboard;

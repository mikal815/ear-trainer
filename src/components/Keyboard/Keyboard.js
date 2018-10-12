import React from "react";
import Tone from "tone";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";

function Keyboard() {
  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("f5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW
  });

  var synth = new Tone.Synth().toMaster();

  return (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={midiNumber => {
        var x = Tone.Frequency(midiNumber, "midi").toNote();
        console.log(x)
        synth.triggerAttack(x);
      }}
      stopNote={midiNumber => {
        synth.triggerRelease();
      }}
      width={1345}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
}

export default Keyboard;

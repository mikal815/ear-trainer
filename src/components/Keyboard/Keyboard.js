import React from "react";
import Tone from "tone";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";



  const firstNote = MidiNumbers.fromNote("c3");
  const lastNote = MidiNumbers.fromNote("c5");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW
  });

  var synth = new Tone.Synth().toMaster();

  const Keyboard = props => (
    <Piano
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={midiNumber => {
        var x = Tone.Frequency(midiNumber, "midi").toNote();
        synth.triggerAttack(x);
      }}
      onPlayNoteInput={(midiNumber) => {
        var x = Tone.Frequency(midiNumber, "midi").toNote();
         props.scorekeeper(x) }}
      stopNote={midiNumber => {
        synth.triggerRelease();
      }}
      width={1345}
      keyboardShortcuts={keyboardShortcuts}
    />
  );


export default Keyboard;

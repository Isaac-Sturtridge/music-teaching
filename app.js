import * as Tone from 'tone';

const button = document.getElementById('button')

function playNote() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n")
}
import * as Tone from 'tone';

document.addEventListener('DOMContentLoaded', () => {
    Tone.start()
    const button = document.getElementById('button');
    const noteButtons = document.querySelectorAll('.note-button');

    button.addEventListener('click', () => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
    });

    noteButtons.forEach((button) => 
        button.addEventListener('click', () => {
            const note = button.getAttribute('data-note');
            playNote(note);
    }));
});
import React from "react";
import * as Tone from 'tone';

function playNote() {
    // create a synth
    const synth = new Tone.Synth().toDestination();
    // play a note from that synth
    synth.triggerAttackRelease("C4", "8n");
}

function MusicPlayer() {
    return (
        <div className="music-player">
             <button type="button" id="button" onClick={playNote}>Middle C</button>
        </div>
    )
}



export default MusicPlayer;
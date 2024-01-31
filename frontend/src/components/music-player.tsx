import * as Tone from 'tone';

function playNote(note: string) {
    // create a synth
    const synth = new Tone.Synth().toDestination();
    // play a note from that synth
    synth.triggerAttackRelease(note, "8n");
}

const notes = ["G5", "F5", "E5", "D5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"]

function MusicPlayer() {
    return (
        <div className='ladder'>
                        <svg width="20%" height="600">
                  <rect y="50" width="20" height="262" className='rect' />
                  <rect y="50" x="90%" width="20" height="262" className='rect'/>
                  {notes.map((note, index)=> {
                    return (
                        <circle key={index} cx={50 + index*25} cy={35 + index*25} r="5" stroke="black" strokeWidth="3" fill="black" onClick={() => playNote(note)}/>
                    )
                  })}
                  {notes.map((note, index) => {
                    return (<text key={index} x={30 + index*25} y={40 + index*25} className='svg-text'>{note[0]}</text>) 
                  })}
                  {/* <circle cx="100" cy="60"  r="10" stroke="black" strokeWidth="3" fill="black" onClick={() => playNote("D5")} />
                  <circle cx="150" cy="110"  r="10" stroke="black" strokeWidth="3" fill="black" onClick={() => playNote("B4")} />
                  <circle cx="200" cy="160"  r="10" stroke="black" strokeWidth="3" fill="black" onClick={() => playNote("G4")} />
                  <circle cx="250" cy="210"  r="10" stroke="black" strokeWidth="3" fill="black" onClick={() => playNote("E4")} />
                  <circle cx="300" cy="260"  r="10" stroke="black" strokeWidth="3" fill="black" onClick={() => playNote("C4")} />
                  
                    <text x="70" y="55" className='svg-text'>D</text>
                    <text x="70" y="105" className='svg-text'>B</text>
                    <text x="70" y="155" className='svg-text'>G</text>
                    <text x="70" y="205" className='svg-text'>E</text>
                    <text x="70" y="255" className='svg-text'>C</text> */}
                  <line x1="0" y1="60" x2="90%" y2="60" stroke="black" strokeWidth="2" className='line'/>
                  <line x1="0" y1="110" x2="90%" y2="110" stroke="black" strokeWidth="2" className='line'/>
                  <line x1="0" y1="160" x2="90%" y2="160" stroke="black" strokeWidth="2" className='line'/>
                  <line x1="0" y1="210" x2="90%" y2="210" stroke="black" strokeWidth="2" className='line'/>
                  <line x1="0" y1="260" x2="90%" y2="260" stroke="black" strokeWidth="2" className='line'/>
            </svg>
            </div>
    )
}



export default MusicPlayer;
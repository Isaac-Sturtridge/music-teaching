import BassClef from './images/Bass-Clef.png';
import TrebleClef from './images/treble-clef.png';
import MusicPlayer from './components/music-player';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="lesson">
            <h2>Lesson 1: Introduction to Music: Treble & Bass Clefs</h2>
            <img src={TrebleClef} alt="treble-clef" className="clef-img"></img>
            <p>This is a treble clef sign. It marks notes higher than middle C.</p>
            <img src={BassClef} alt="bass-clef" className="clef-img"></img>
            <p>This is a bass clef. It marks notes lower than middle C.</p>
        </div>
        <MusicPlayer></MusicPlayer>
        <Link to="/lesson2">Go To Lesson 2</Link>
      </main>
    </div>
  );
}

export default App;

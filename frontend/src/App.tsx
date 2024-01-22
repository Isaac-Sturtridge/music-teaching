import BassClef from './assets/Bass-Clef.png';
import TrebleClef from './assets/treble-clef.png';
import MusicPlayer from './components/music-player';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <>
    <Header></Header>
      <div className="App">
      <main className="App-main">
        <div className="lesson">
            <h2>Lesson 1: Introduction to Music: Treble & Bass Clefs</h2>
            <img src={TrebleClef} alt="treble-clef" className="clef-img"></img>
            <p>This is a treble clef sign. It marks notes higher than middle C.</p>
            <img src={BassClef} alt="bass-clef" className="clef-img"></img>
            <p>This is a bass clef. It marks notes lower than middle C.</p>
            <div className='ladder'>
                        <svg width="100" height="300">
                  <rect width="20" height="300" />
                  <rect x="80" width="20" height="300" />
                  <line x1="80" y1="50" x2="120" y2="50" stroke="black" />
                  <line x1="80" y1="100" x2="120" y2="100" stroke="black"/>
                  <line x1="80" y1="150" x2="120" y2="150" stroke="black" />
            </svg>
            </div>
        </div>
        <MusicPlayer></MusicPlayer>
      </main>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App

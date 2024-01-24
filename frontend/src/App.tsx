import BassClef from './assets/Bass-Clef.png';
import TrebleClef from './assets/treble-clef.png';
import Header from './components/header';
import Footer from './components/footer';
import MusicPlayer from './components/music-player';

function App() {

  return (
    <>
    <Header></Header>
      <div className="App">
      <main className="App-main">
        <div className="lesson">
            <h2>Music</h2>
            <img src={TrebleClef} alt="treble-clef" className="clef-img"></img>
            <p>This is a treble clef sign. It marks notes higher than middle C.</p>
            <img src={BassClef} alt="bass-clef" className="clef-img"></img>
            <p>This is a bass clef. It marks notes lower than middle C.</p>
            <MusicPlayer></MusicPlayer>
        </div>
      </main>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App

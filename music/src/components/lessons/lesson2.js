// Lesson2.js
import React from "react";
import MusicPlayer from '../../components/music-player';
import '../../App.css';
import { Link } from 'react-router-dom';

function Lesson2() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="lesson">
            <h2>Lesson 2: Introduction to Music: Notes A to G</h2>
            <p>There are 7 notes in music, named A, B, C, D, E, F and G.</p>
        </div>
        <MusicPlayer></MusicPlayer>
        <Link to="/">Go To Lesson 1</Link>
      </main>
    </div>
  );
}

export default Lesson2;
// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Lesson2 from './components/lessons/lesson2.js';

function CreateRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        {/* Add more routes for different pages as needed*/}
      </Routes>
    </Router>
  );
}

export default CreateRoutes;
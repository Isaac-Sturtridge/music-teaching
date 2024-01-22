// src/Routes.ts
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Lesson2 from './components/lessons/lesson2';

function CreateRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        {/* Add more routes for different pages as needed*/}
      </Routes>
    </Router>
  );
}

export default CreateRoutes;
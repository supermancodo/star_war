import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Planets } from './components/Planets';
import { PlanetDetails } from './components/PlanetDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Planets />} />
        <Route path="/planet/:id" element={<PlanetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

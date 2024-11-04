import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Accueil from './pages/Accueil.js';
import Projet2 from './pages/Projet2.js';
import Projet3 from './pages/Projet3.js';
import Projet4 from './pages/Projet4.js';
import Projet6 from './pages/Projet6.js';

const App = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Accueil />} />
       
        <Route path="/projet2" element={<Projet2 />} />
        <Route path="/projet3" element={<Projet3 />} />
        <Route path="/projet4" element={<Projet4 />} />
        <Route path="/projet6" element={<Projet6 />} />
       
      </Routes>
    </Router>
  );
};

export default App;
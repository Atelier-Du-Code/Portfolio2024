import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from "../src/components/ScrollToTop.js";

//Pages
import Accueil from './pages/Accueil.js';
import Projet2 from './pages/Projet2.js';
import Projet3 from './pages/Projet3.js';
import Projet4 from './pages/Projet4.js';
import Projet6 from './pages/Projet6.js';
import Projet7 from './pages/Projet7.js';
import Projet8 from './pages/Projet8.js';
import Projet9 from './pages/Projet9.js';

const App = () => {
  return (
    <Router>    
       <ScrollToTop />  
      <Routes>
        <Route path="/" element={<Accueil />} />
       
        <Route path="/projet2" element={<Projet2 />} />
        <Route path="/projet3" element={<Projet3 />} />
        <Route path="/projet4" element={<Projet4 />} />
        <Route path="/projet6" element={<Projet6 />} />
        <Route path="/projet7" element={<Projet7 />} />
        <Route path="/projet8" element={<Projet8 />} />
        <Route path="/projet9" element={<Projet9 />} />

       
      </Routes>
    </Router>
  );
};

export default App;
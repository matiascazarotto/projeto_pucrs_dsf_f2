import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import CarDetail from './pages/CarDetail'
import CarsList from './pages/CarsList';
import NotFound from './pages/NotFound';
import CarEdit from './components/carEdit/carEdit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/CarsList" element={<CarsList />} />
          <Route path="/CarDetail" element={<CarDetail />} />
          <Route path='/CarDetail/editar/:id' element={<CarEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
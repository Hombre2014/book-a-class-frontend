import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Reserve from './features/reservations/Reserve';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/:id/reserve" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

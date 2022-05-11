import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './features/courses/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Courses from './features/courses/courses';

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

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import Reserve from './features/reservations/Reserve';
import Reservations from './features/reservations/Reservations';
import Login from './components/Login';
import Registration from './components/Registration';
import Menu from './pages/Menu';
import DeletePage from './components/DeletePage';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/:id/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/delete_course" element={<DeletePage />} />
        <Route path="/add_course" element={<AddCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

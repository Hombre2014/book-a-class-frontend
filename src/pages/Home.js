import React from 'react';
import Menu from './Menu';
import Courses from '../features/courses/Courses';
import '../stylesheets/home.css';

const Home = () => (
  <div className="flex">
    <Menu />
    <Courses />
  </div>
);

export default Home;

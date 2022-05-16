import React from 'react';
import Menu from './Menu';
import Courses from '../features/courses/Courses';

const Home = () => (
  <div className="home">
    <Menu />
    <Courses />
  </div>
);

export default Home;

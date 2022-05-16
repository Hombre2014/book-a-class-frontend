import React from 'react';
import Menu from './Menu';
import Courses from '../features/courses/Courses';

const Home = () => (
  <div className="flex">
    <Menu />
    <Courses />
  </div>
);

export default Home;

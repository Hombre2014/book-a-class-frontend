import React from 'react';
import Menu from './Menu';
// import Courses from '../features/courses/Courses';
import HomeContent from '../components/home/HomeContent';

const Home = () => (
  <div className="home">
    <Menu />
    <HomeContent />
    {/* <Courses /> */}
  </div>
);

export default Home;

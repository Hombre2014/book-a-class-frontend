import React from 'react';
import Menu from './Menu';
// import HomeContent from '../components/home/HomeContent';
import Courses from '../features/courses/Courses';
import '../stylesheets/home.css';

const Home = () => (
  <div className="flex">
    <Menu />
    <Courses />
    {/* <HomeContent /> */}
  </div>
);

export default Home;

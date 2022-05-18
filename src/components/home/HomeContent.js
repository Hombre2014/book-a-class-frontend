import React from 'react';
import HomeCarousel from './HomeCarousel';

const HomeContent = () => (
  <div className="home-content">
    <div className="home-content-header">
      <h1>LATEST COURSES</h1>
      <h5>Please select a Course</h5>
    </div>
    <HomeCarousel />
  </div>
);

export default HomeContent;

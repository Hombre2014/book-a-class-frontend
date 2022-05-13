import React from 'react';
import SideBar from '../components/DesktopNav';
import HamBurger from '../components/mobileNav';
import Courses from '../features/courses/Courses';

const Home = () => (
  <div className="h-screen flex overflow-hidden bg-white">
    {/* Static Navigation bar for desktop */}
    <div className="hidden lg:flex lg:flex-shrink-0">
      <SideBar />
    </div>
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
      {/* Navigation for mobile */}
      <HamBurger />
      <Courses />
    </div>
  </div>
);

export default Home;

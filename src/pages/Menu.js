import React from 'react';
import SideBar from '../components/DesktopNav';
import HamBurger from '../components/mobileNav';

const Menu = () => (
  <div className="h-screen flex overflow-hidden bg-white">
    <div className="hidden lg:flex lg:flex-shrink-0">
      <SideBar />
    </div>
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
      <HamBurger />
    </div>
  </div>
);

export default Menu;

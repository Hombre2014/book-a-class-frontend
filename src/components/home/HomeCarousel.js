import React from 'react';
import ClassCard from './ClassCard';

const HomeCarousel = () => {
  const scrollLeft = () => {
    document.getElementById('home-carousel').scrollLeft += 500;
  };

  const scrollRight = () => {
    document.getElementById('home-carousel').scrollLeft -= 500;
  };

  return (
    <>
      <div className="home-carousel-btns">
        <button type="button" onClick={scrollRight}>
          ᐊ
        </button>
        <button type="button" className="button-right" onClick={scrollLeft}>
          ᐅ
        </button>
      </div>
      <div id="home-carousel" className="home-carousel">
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
        <ClassCard />
      </div>
    </>
  );
};

export default HomeCarousel;

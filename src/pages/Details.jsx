import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Course from '../features/courses/Course';
import SideBar from '../components/DesktopNav';
import HamBurger from '../components/mobileNav';

const Details = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  const fetchCourse = async () => {
    const course = await fetch(`https://book-a-class.herokuapp.com/api/v1/courses/${id}`);
    const res = await course.json();
    setCourse(res);
    return res;
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div>
      <div className="h-screen flex overflow-hidden bg-white">
        <div className="hidden lg:flex lg:flex-shrink-0">
          <SideBar />
        </div>
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden mt-32 md:mt-1">
          <HamBurger />
        </div>
        <div>
          <Course
            category={course.category}
            title={course.title}
            description={course.description}
            duration={course.duration}
            photo={course.photo}
            price={course.price}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

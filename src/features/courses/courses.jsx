import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Course from './Course';
import fetchCourses from './courseAPI';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  // dispatch(fetchCourses());

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <div>
      <h1>Book a class online</h1>
      {courses.courses.map((course) => (
        <div className="key" key={course.id}>
          <Course
            id={course.id}
            category={course.category}
            description={course.description}
            duration={course.duration}
            photo={course.photo}
            price={course.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Courses;

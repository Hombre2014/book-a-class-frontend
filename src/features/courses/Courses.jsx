import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Course from './Course';
import fetchCourses from './courseAPI';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Courses</h1>
      {courses.courses && courses.courses.length > 0 && courses.courses.map((course) => (
        <div className="key" key={course.id}>
          <Course
            title={course.title}
            category={course.category}
            photo={course.photo}
          />
          <a href="/details" data-id={course.id}>Details</a>
        </div>
      ))}
    </div>
  );
};

export default Courses;

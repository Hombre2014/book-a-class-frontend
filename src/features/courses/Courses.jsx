import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Course from './Course';
import fetchCourses from './courseAPI';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const navigate = useNavigate();

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
          <button type="button" value={course.id} onClick={() => navigate(`/details/${course.id}`)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default Courses;

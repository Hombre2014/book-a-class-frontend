import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShortCourse from './ShortCourse';
import fetchCourses from './courseAPI';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="all-courses">
      <h1 className="text-center h1 latest">Latest Courses</h1>
      <div className="three-col">
        {courses.courses && courses.courses.length > 0 && courses.courses.map((course) => (
          <div className="key" key={course.id}>
            <button type="button" value={course.id} onClick={() => navigate(`/details/${course.id}`)}>
              <ShortCourse
                photo={course.photo}
                title={course.title}
                category={course.category}
                description={course.description}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

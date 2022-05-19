import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import ClassCard from './ClassCard';
import ShortCourse from '../../features/courses/ShortCourse';
import fetchCourses from '../../features/courses/courseAPI';

const HomeCarousel = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  console.log(courses);

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
        {courses.courses && courses.courses.length > 0 && courses.courses.map((course) => (
          <div className="class-card" key={course.id}>
            <div className="key">
              <button type="button" value={course.id} onClick={() => navigate(`/details/${course.id}`)}>
                {/* <ClassCard> */}
                <ShortCourse
                  photo={course.photo}
                  title={course.title}
                  category={course.category}
                  description={course.description}
                />
                {/* </ClassCard> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeCarousel;

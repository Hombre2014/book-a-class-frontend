import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Course from '../features/courses/Course';

const Details = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  const fetchCourse = async () => {
    const course = await fetch(`http://localhost:3000/api/v1/courses/${id}`);
    const res = await course.json();
    setCourse(res);
    return res;
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="container">
      <div>
        <Course
          id={course.id}
          category={course.category}
          title={course.title}
          description={course.description}
          duration={course.duration}
          photo={course.photo}
          price={course.price}
        />
      </div>
    </div>
  );
};

export default Details;

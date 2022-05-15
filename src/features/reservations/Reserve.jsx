import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Course from '../courses/Course';
// import Details from '../../pages/Details';

const Reserve = () => {
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
    <div className="container-reserved">
      <img className="photo-reserve" src={course.photo} alt="Web" />
      <h1 className="h1 title">{course.title}</h1>
      <p className="description">{course.description}</p>
    </div>
  );
};

export default Reserve;

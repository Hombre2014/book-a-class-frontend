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

  const newReservation = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        reserve_date: '2022-06-23',
        duration: 14,
        user_id: 1,
        course_id: course.id,
      },
    ),
  };

  const createReservation = async () => {
    const response = await fetch(`http://localhost:3000/api/v1/courses/${id}/reservations`, newReservation);
    const data = await response.json();
    // !! Set state for reservations
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createReservation();
  };

  return (
    <div className="container-reserved">
      <img className="photo-reserve" src={course.photo} alt="Web" />
      <h1 className="h1 title">{course.title}</h1>
      <p className="description">{course.description}</p>
      <div className="form-buttons">
        <div className="select-container">
          <select id="date" name="start-date" form="reserve" className="select-button">
            <option value="">Date</option>
            <option value="2022-05-23">2022-05-23</option>
            <option value="2022-06-23">2022-06-23</option>
            <option value="2022-07-23">2022-07-23</option>
            <option value="2022-08-23">2022-08-23</option>
          </select>
        </div>
        <form onSubmit={handleSubmit} id="reserve">
          <input type="hidden" name="user-id" id="user-id" value="1" />
          <input type="hidden" name="course-id" id="course-id" value={course.id} />
          <button className="reserve-button" type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;

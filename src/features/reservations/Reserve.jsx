import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reserve = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [dates, setDates] = useState([]);

  const fetchCourse = async () => {
    const course = await fetch(`http://localhost:3000/api/v1/courses/${id}`);
    const res = await course.json();
    setCourse(res);
    console.log('Fetch course: ', res);
    return res;
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchDates = async () => {
    const dates = await fetch(`http://localhost:3000/api/v1/courses/${id}/start_dates`);
    const res = await dates.json();
    setDates(res);
    return res;
  };

  useEffect(() => {
    fetchDates();
  }, []);

  const handleChange = (event) => {
    console.log('Date change: ', event.target.value);
    return event.target.value;
  };

  const newReservation = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        reserve_date: handleChange,
        duration: 7,
        user_id: 4,
        course_id: course.id,
      },
    ),
  };

  const createReservation = async () => {
    const response = await fetch('http://localhost:3000/api/v1/users/4/reservations', newReservation);
    const data = await response.json();
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
          <select id="date" name="start-date" form="reserve" className="select-button" onChange={handleChange}>
            <option value="">Date</option>
            {dates.map((date) => (
              <option value={date} key={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSubmit} id="reserve">
          <input type="hidden" name="user-id" id="user-id" value="4" />
          <input type="hidden" name="course-id" id="course-id" value={course.id} />
          <button className="reserve-button" type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;

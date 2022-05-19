import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Reserve = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState('');
  const [reserved, setReserved] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  console.log(token[0]);

  const fetchCourse = async () => {
    const course = await fetch(`http://localhost:3000/api/v1/courses/${id}`);
    const res = await course.json();
    setCourse(res);
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
    setDate(event.target.value);
    return event.target.value;
  };

  const newReservation = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token[0]}`,
    },
    body: JSON.stringify(
      {
        reserve_date: date,
        duration: course.duration,
        course_id: course.id,
      },
    ),
  };

  const createReservation = async () => {
    const response = await fetch('http://localhost:3000/api/v1/users/1/reservations', newReservation);
    const data = await response.json();
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createReservation();
    setReserved(true);
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
      {reserved
      && (
        <div className="success">
          <p className="text-center m-4">The reservation was successful.</p>
          <button type="button" className="reserve-button back" onClick={() => navigate(`/details/${course.id}`)}>Back</button>
          <button type="button" className="reserve-button" onClick={() => navigate('/reservations')}>My reservations</button>
        </div>
      )}
    </div>
  );
};

export default Reserve;

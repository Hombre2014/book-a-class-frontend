import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCourses from '../courses/courseAPI';
import Menu from '../../pages/Menu';

const Reservations = () => {
  const courses = useSelector((state) => state.courses);
  const [reservations, setReservations] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const newReservation = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token[0]}`,
    },
  };

  const getReservations = async () => {
    const response = await fetch('http://localhost:3000/api/v1/users/1/reservations', newReservation);
    const data = await response.json();
    setReservations(data);
  };

  return (
    <div className="flex">
      <Menu />
      <div className="container">
        <h1 className="text-center h1 my-res-title">My Reservations</h1>
        <button type="button" className="get-button" onClick={getReservations}>Get my reservations</button>
        <div className="container-table">
          <table className="table">
            <tbody>
              <tr>
                <th className="head">Course</th>
                <th className="head">Start date</th>
                <th className="head">Duration</th>
              </tr>
              {reservations
                && reservations.length > 0
                && reservations.map((reservation) => (
                  <tr className="key" key={reservation.id}>
                    <th className="head">{courses.courses[reservation.course_id - 1].title}</th>
                    <th className="head">{reservation.reserve_date}</th>
                    <th className="head">{reservation.duration}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reservations;

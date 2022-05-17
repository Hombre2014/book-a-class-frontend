import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchReservations from './reservationAPI';
import Menu from '../../pages/Menu';
import fetchCourses from '../courses/courseAPI';

const Reservations = () => {
  const courses = useSelector((state) => state.courses);
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="flex">
      <Menu />
      <div className="container">
        <h1 className="text-center h1 my-res-title">My Reservations</h1>
        <div className="container-table">
          <table className="table">
            <tbody>
              <tr>
                <th className="head">Course</th>
                <th className="head">Start date</th>
                <th className="head">Duration</th>
              </tr>
              {reservations.reservations
                && reservations.reservations.length > 0
                && reservations.reservations.map((reservation) => (
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

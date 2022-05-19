import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

// const fetchReservations = async () => {
//   const token = useSelector((state) => state.token);
//   const newReservation = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token[0]}`,
//     },
//   };

//   const response = await fetch('http://localhost:3000/api/v1/users/1/reservations', newReservation);
//   const data = await response.json();
//   return data;
// };

const API_URL = 'http://localhost:3000/api/v1/users/1/reservations';

const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const reservations = await fetch(API_URL);
    const res = await reservations.json();
    return res;
  },
);

export default fetchReservations;

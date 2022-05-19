import { createAsyncThunk } from '@reduxjs/toolkit';

<<<<<<< HEAD
const API_URL = 'http://localhost:3000/api/v1/users/1/reservations';
=======
const API_URL = 'http://localhost:3000/api/v1/users/4/reservations';
>>>>>>> a8a76b7a0b2e43bf0e8ff65382598fb5688aa6e8

const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const reservations = await fetch(API_URL);
    const res = await reservations.json();
    return res;
  },
);

export default fetchReservations;

import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/courses/1/reservations';

const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const reservations = await fetch(API_URL);
    const res = await reservations.json();
    return res;
  },
);

export default fetchReservations;

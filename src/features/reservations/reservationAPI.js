import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://book-a-class.herokuapp.com/api/v1/users/1/reservations';

const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const reservations = await fetch(API_URL);
    const res = await reservations.json();
    return res;
  },
);

export default fetchReservations;

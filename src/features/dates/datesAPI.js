import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/courses';

const fetchDates = createAsyncThunk(
  'dates/fetchDates',
  async () => {
    const dates = await fetch(API_URL);
    const res = await dates.json();
    return res;
  },
);

export default fetchDates;

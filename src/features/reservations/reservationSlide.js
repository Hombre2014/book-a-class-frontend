import { createSlice } from '@reduxjs/toolkit';
import fetchReservations from './reservationAPI';

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservations = action.payload;
    });
  },
});

export default reservationSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import fetchDates from './datesAPI';

export const dateSlice = createSlice({
  name: 'dates',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder.addCase(fetchDates.fulfilled, (state, action) => {
      state.dates = action.payload;
    });
  },
});

export default dateSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import fetchCourses from './courseAPI';

export const courseSlice = createSlice({
  name: 'courses',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
  },
});

export default courseSlice.reducer;

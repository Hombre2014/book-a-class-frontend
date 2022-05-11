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
      console.log(state.courses);
      /* eslint-disable no-param-reassign */
    });
  },
});

// export const {} = courseSlice.actions;

// export const selectCourses = (state) => state.courses.courses;

// export const selectStatus = (state) => state.courses.status;

// export default courseSlice.reducer;

// export const { getCourses } = courseSlice.actions;

export default courseSlice.reducer;

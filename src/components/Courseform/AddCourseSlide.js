import { createSlice } from '@reduxjs/toolkit';
import fetchCourses from './courseAPI';

export const AddCoursesSlice = createSlice({
  name: 'addcourses',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.addcourses = action.payload;
    });
  },
});

export default AddCoursesSlice.reducer;

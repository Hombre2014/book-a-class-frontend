// import { CourseState } from './courseSlice';

import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/courses';

const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const courses = await fetch(API_URL);
    const res = await courses.json();
    console.log(res);
    return res;
  },
);

export default fetchCourses;

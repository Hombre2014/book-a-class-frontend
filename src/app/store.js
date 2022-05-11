import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/courseSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

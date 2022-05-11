import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/courseSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/courseSlice';
import reservationsReducer from '../features/reservations/reservationSlide';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    reservations: reservationsReducer,
  },
});

export default store;

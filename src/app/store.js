import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/courseSlice';
import reservationsReducer from '../features/reservations/reservationSlide';
// import datesReducer from '../features/dates/dateSlide';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    reservations: reservationsReducer,
    // dates: datesReducer,
  },
});

export default store;

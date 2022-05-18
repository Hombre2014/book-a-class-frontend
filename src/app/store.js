import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/courseSlice';
import reservationsReducer from '../features/reservations/reservationSlide';
import tokenReducer from '../redux/login/login';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    reservations: reservationsReducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

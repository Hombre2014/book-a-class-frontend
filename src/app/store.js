import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coursesReducer from '../features/courses/courseSlice';
import reservationsReducer from '../features/reservations/reservationSlide';
import tokenReducer from '../redux/login/login';
import courseMReducer, { addCourse } from '../redux/delete/course';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    reservations: reservationsReducer,
    token: tokenReducer,
    courseM: courseMReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const refresh = async () => {
  await fetch('http://localhost:3000/api/v1/courses')
    .then((response) => response.json())
    .then((data) => {
      data.map((info) => store.dispatch(addCourse(info)));
    });
};

refresh();

export default store;

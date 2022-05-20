import axios from 'axios';
import { BASE_URL } from '../../api/apiData';
import { CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, CREATE_COURSE_FAILURE } from './courseTypes';

export const createCourseRequest = () => ({
  type: CREATE_COURSE_REQUEST,
});

export const createCourseSuccess = (course) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: course,
});

export const createCourseFailure = (error) => ({
  type: CREATE_COURSE_FAILURE,
  payload: error,
});

export const createCourse = (course) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(createCourseRequest());
  return axios.post(`${BASE_URL}/courses`, course, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      dispatch(createCourseSuccess(response.data));
    })
    .catch((error) => {
      dispatch(createCourseFailure(error));
    });
};

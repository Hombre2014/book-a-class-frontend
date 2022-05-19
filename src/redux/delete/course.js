const ADD_COURSE = 'frontend/login/ADD_COURSE';
const REMOVE_COURSE = 'frontend/course/REMOVE_COURSE';

const initialState = [];

export const addCourse = (payload) => ({
  type: ADD_COURSE,
  payload,
});

export const removeCourse = (payload) => ({
  type: REMOVE_COURSE,
  payload,
});

export const addCourseAsync = (payload) => (dispatch) => fetch('http://localhost:3000/api/v1/courses',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
  .then((data) => {
    if (Object.keys(data)[0] === 'success') dispatch(addCourse(payload));
  });

export const removeAsync = (payload) => (dispatch) => fetch(`http://localhost:3000/api/v1/courses/${payload.id}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
  .then((data) => {
    if (Object.keys(data)[0] === 'success') dispatch(removeCourse(payload));
  });

const courseMReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return [...state, action.payload];
    case REMOVE_COURSE:
      return state.filter((next) => next.id !== action.payload.id);
    default:
      return state;
  }
};

export default courseMReducer;

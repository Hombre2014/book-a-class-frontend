/* eslint-disable no-unused-vars */

const ADD_TOKEN = 'frontend/login/ADD_TOKEN';
const REMOVE_TOKEN = 'frontend/login/REMOVE_TOKEN';

const initialState = [];

export const addToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

export const addTokenAsync = (payload) => (dispatch) => fetch('https://book-a-class.herokuapp.com/api/v1/authenticate',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
  .then((data) => {
    if (Object.keys(data)[0] === 'token') dispatch(addToken(data.token));
  });

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      if (state.includes(action.payload)) return state;
      return [...state, action.payload];
    case REMOVE_TOKEN:
      return [];
    default:
      return state;
  }
};

export default tokenReducer;

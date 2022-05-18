const ADD_TOKEN = 'frontend/login/ADD_TOKEN';
const REMOVE_TOKEN = 'frontend/login/REMOVE_TOKEN';

const initialState = [];

export const addToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});



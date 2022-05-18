const ADD_TOKEN = 'frontend/login/ADD_TOKEN';
const REMOVE_TOKEN = 'frontend/login/REMOVE_TOKEN';

const initialState = [];

export const addToken = (payload) => ({
  type: ADD_TOKEN,
  payload,
});

export const removeToken = (payload) => ({
  type: REMOVE_TOKEN,
  payload,
});

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return [...state, action.payload];
    case REMOVE_TOKEN:
      return state.filter((token) => token !== action.payload)
    default:
      return state;
  }
}

export default tokenReducer;

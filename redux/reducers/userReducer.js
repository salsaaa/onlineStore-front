import TYPES from "./types";

// How to change state(store) => POSTS

//Initial State
const initialState = {
  item: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}

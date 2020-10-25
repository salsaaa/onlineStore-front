import TYPES from "./types";

// How to change state(store) => POSTS

//Initial State
const initialState = {
  item: {}
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_CART:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}

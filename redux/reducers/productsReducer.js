import TYPES from "./types";

// How to change state(store) => POSTS

//Initial State
const initialState = {
  items: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}

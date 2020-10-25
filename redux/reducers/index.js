import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";

//Root Reducer
export default combineReducers({
  products: productsReducer,
  user: userReducer
});

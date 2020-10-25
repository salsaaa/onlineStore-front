import TYPES from "../reducers/types";

//Action Creator

export function fetchProducts() {
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: TYPES.FETCH_PRODUCTS,
          payload: data
        })
      );
  };
}


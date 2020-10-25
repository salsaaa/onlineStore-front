import TYPES from "../reducers/types";

//Action Creator

export function AddCart(cart) {
  return function(dispatch) {
      fetch("http://localhost:4000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cart)
      })
        .then(res => res.json())
        .then(data =>
          dispatch({
            type: TYPES.ADD_CART,
            payload: data
          })
        );
    };
}


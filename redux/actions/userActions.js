import TYPES from "../reducers/types";

//Action Creator

export function AddUser(data) {
    return function(dispatch) {
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data =>
            dispatch({
              type: TYPES.ADD_USER,
              payload: data
            })
          );
      };
}


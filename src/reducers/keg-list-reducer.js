import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, brand, price, abv, pintQuantity, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          name,
          brand,
          price,
          abv,
          pintQuantity,
          id,
        },
      });
    case c.DELETE_KEG:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

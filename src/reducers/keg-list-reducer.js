export default (state = {}, action) => {
  const { name, brand, price, abv, pintQuantity, id } = action;
  switch (action.type) {
    case "ADD_KEG":
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
    default:
      return state;
  }
};

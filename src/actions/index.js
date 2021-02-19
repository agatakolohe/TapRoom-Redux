export const addKeg = (keg) => {
  const { name, brand, price, abv, pintQuantity, id } = keg;
  return {
    type: "ADD_KEG",
    name,
    brand,
    price,
    abv,
    pintQuantity,
    id,
  };
};

export const deleteKeg = (id) => ({
  type: "DELETE_KEG",
  id,
});

export const toggleForm = () => ({ type: "TOGGLE_FORM" });

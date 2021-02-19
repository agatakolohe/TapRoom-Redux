import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {
  let action;
  const kegData = {
    name: "Hoptimum",
    brand: "Sierra Nevada",
    price: "30",
    abv: "10",
    pintQuantity: "100",
    id: 1,
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
  test("Should successfully add new keg data to masterKegList", () => {
    const { name, brand, price, abv, pintQuantity, id } = kegData;
    action = {
      type: "ADD_KEG",
      name,
      brand,
      price,
      abv,
      pintQuantity,
      id,
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name,
        brand,
        price,
        abv,
        pintQuantity,
        id,
      },
    });
  });
});

import kegListReducer from "../../reducers/keg-list-reducer";

describe("kegListReducer", () => {
  const currentState = {
    1: {
      name: "Tricerahops",
      brand: "Ninkasi",
      price: "40",
      abv: "7",
      pintQuantity: "100",
      id: 1,
    },
    2: {
      name: "Yacht Rocket",
      brand: "Urban Family",
      price: "60",
      abv: "5",
      pintQuantity: "100",
      id: 2,
    },
  };

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

  test("Should successfully delete a keg", () => {
    action = {
      type: "DELETE_KEG",
      id: 1,
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: "Yacht Rocket",
        brand: "Urban Family",
        price: "60",
        abv: "5",
        pintQuantity: "100",
        id: 2,
      },
    });
  });
});

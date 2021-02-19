import * as actions from "./../../actions";

describe("TapRoom actions", () => {
  it("addKeg should create ADD_KEG action", () => {
    expect(
      actions.addKeg({
        name: "Tricerahops",
        brand: "Ninkasi",
        price: "40",
        abv: "7",
        pintQuantity: "100",
        id: 1,
      })
    ).toEqual({
      type: "ADD_KEG",
      name: "Tricerahops",
      brand: "Ninkasi",
      price: "40",
      abv: "7",
      pintQuantity: "100",
      id: 1,
    });
  });
});

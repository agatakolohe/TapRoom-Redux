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

  it("deleteKeg should create DELETE_KEG action", () => {
    expect(actions.deleteKeg(1)).toEqual({ type: "DELETE_KEG", id: 1 });
  });

  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({ type: "TOGGLE_FORM" });
  });

  it("toggleEdit should create TOGGLE_EDIT action", () => {
    expect(actions.toggleEdit()).toEqual({ type: "TOGGLE_EDIT" });
  });
});

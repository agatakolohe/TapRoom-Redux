import * as actions from "./../../actions";
import * as c from "../../actions/ActionTypes";

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
      type: c.ADD_KEG,
      name: "Tricerahops",
      brand: "Ninkasi",
      price: "40",
      abv: "7",
      pintQuantity: "100",
      id: 1,
    });
  });

  it("deleteKeg should create DELETE_KEG action", () => {
    expect(actions.deleteKeg(1)).toEqual({ type: c.DELETE_KEG, id: 1 });
  });

  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({ type: c.TOGGLE_FORM });
  });

  it("toggleEdit should create TOGGLE_EDIT action", () => {
    expect(actions.toggleEdit()).toEqual({ type: c.TOGGLE_EDIT });
  });
});

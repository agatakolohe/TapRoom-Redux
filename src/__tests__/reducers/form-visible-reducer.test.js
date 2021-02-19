import kegFormVisibleReducer from "../../reducers/form-visible-reducer";

describe("kegFormVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(kegFormVisibleReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle form visibility state to true", () => {
    expect(kegFormVisibleReducer(false, { type: "TOGGLE_FORM" })).toEqual(true);
  });
});

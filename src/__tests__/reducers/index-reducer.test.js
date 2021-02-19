import rootReducer from "../../reducers/index";
import { createStore } from "redux";
import kegListReducer from "../../reducers/keg-list-reducer";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import editingReducer from "../../reducers/editing-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      editing: false,
    });
  });

  test("Check that inital state of kegListReducer matches root reducer", () => {
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(true, { type: null })
    );
  });
});

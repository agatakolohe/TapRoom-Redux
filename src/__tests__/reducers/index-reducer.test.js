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
      formVisibleReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of editingReducer matches root reducer", () => {
    expect(store.getState().editing).toEqual(
      editingReducer(undefined, { type: null })
    );
  });

  test("Check that ADD_KEG action works for kegListReducer and root reducer", () => {
    const action = {
      type: "ADD_KEG",
      name: "Hoptimum",
      brand: "Sierra Nevada",
      price: "30",
      abv: "10",
      pintQuantity: "100",
      id: 1,
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(undefined, action)
    );
  });

  test("Check that DELETE_KEG action works for kegListReducer and root reducer", () => {
    const currentState = {
      1: {
        name: "Tricerahops",
        brand: "Ninkasi",
        price: "40",
        abv: "7",
        pintQuantity: "100",
        id: 1,
      },
    };
    const action = {
      type: "DELETE_KEG",
      id: 1,
    };
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(
      kegListReducer(currentState, action)
    );
  });

  test("Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: "TOGGLE_FORM",
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });

  test("Check that TOGGLE_EDIT action works for editingReducer and root reducer", () => {
    const action = {
      type: "TOGGLE_EDIT",
    };
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(true, action));
  });
});

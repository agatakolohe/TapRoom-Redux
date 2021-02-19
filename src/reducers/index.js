import kegFormVisibleReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";
import editingReducer from "./editing-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  masterKegList: kegListReducer,
  kegFormVisibleOnPage: kegFormVisibleReducer,
  editing: editingReducer,
});

export default rootReducer;

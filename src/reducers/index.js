import persistReducer from "./persister";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  songs: persistReducer,
});

export default allReducers;

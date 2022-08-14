import { combineReducers } from "redux";
import UserReducer from "./reducers/User.reducer";

const RootReducers = combineReducers({ UserReducer });

export default RootReducers;

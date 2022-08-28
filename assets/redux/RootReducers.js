import { combineReducers } from "redux";
import UserReducer from "./reducers/User.reducer";
import ErrorsReducer from "./reducers/Errors.reducer";
import CivilReducer from "./reducers/Civil.reducer";

const RootReducers = combineReducers({
  UserReducer,
  ErrorsReducer,
  CivilReducer,
});

export default RootReducers;

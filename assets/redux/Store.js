import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./RootReducers";

export default createStore(
  RootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
);

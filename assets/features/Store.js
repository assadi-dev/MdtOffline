import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./RootReducers";

export default configureStore({
  reducer: RootReducers,
});

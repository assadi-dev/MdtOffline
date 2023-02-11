import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", message: "", code: "" };

const ErrorSlice = createSlice({
  name: "Error",
  initialState,
  reducer: {
    getError: (state) => {
      return state;
    },
    setError: (state, action) => {
      const { payload } = action;
      state.name = payload.name ? payload.name : "";
      state.message = payload.message ? payload.message : "";
      state.code = payload.code ? payload.code : "";
    },
  },
});

export const ErrorMessage = (state) => state.Error.message;

export default ErrorSlice.reducer;

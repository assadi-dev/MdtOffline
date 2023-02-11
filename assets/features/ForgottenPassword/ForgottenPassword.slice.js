import { createSlice } from "@reduxjs/toolkit";
import {
  addForgottenPasswordAsync,
  editForgottenPasswordAsync,
  getAllForgottenPasswordAsync,
} from "./ForgottenPasswordAsyncApi";

const initialState = { collections: [], selected: [], error: "", status: "" };

const ForgottenPasswordSlice = createSlice({
  name: "ForgottenPassword",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllForgottenPasswordAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getAllForgottenPasswordAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(getAllForgottenPasswordAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = payload;
        state.status = "complete";
      });
    builder.addCase(addForgottenPasswordAsync.fulfilled, (state, action) => {
      const { payload } = action;
      state.collections = [...state, payload];
    });
    builder.addCase(editForgottenPasswordAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateCollection = state.collections.map((password) => {
        if (password.id == payload.id) {
          return payload;
        }
        return password;
      });
      state.collections = updateCollection;
    });
  },
});

export default ForgottenPasswordSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  addForgottenPasswordAsync,
  deleteForgottenpasswordAsync,
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

      let updateCollection = [...state.collections].map((password) => {
        if (password.id == payload.id) {
          return { ...payload };
        }
      });
      state.collections = updateCollection;
    });

    builder.addCase(deleteForgottenpasswordAsync.fulfilled, (state, action) => {
      const { payload } = action;

      let removeitem = [...state.collections].filter(
        (item) => item.id != payload.id
      );

      state.collections = removeitem;
    });
  },
});

export default ForgottenPasswordSlice.reducer;

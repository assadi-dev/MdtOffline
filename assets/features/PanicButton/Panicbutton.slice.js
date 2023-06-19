import { createSlice } from "@reduxjs/toolkit";
import {
  deletePanicButtonAsync,
  getAllPanicButtonAsync,
} from "./PanicbuttonAsync";

const initialState = { collections: [], selected: [], error: "", status: "" };

const PanicButtonSlice = createSlice({
  name: "PanicButton",
  initialState,
  reducers: {
    addEventPanicButton: (state, action) => {
      const { payload } = action;

      let itemAdded = [...state.collections, payload];
      state.collections = itemAdded;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPanicButtonAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getAllPanicButtonAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload;
      })
      .addCase(getAllPanicButtonAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      });

    builder.addCase(deletePanicButtonAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let itemRemoved = [...state.collections].filter(
        (item) => item.id != payload.id
      );

      state.collections = itemRemoved;
    });
  },
});

export const { addEventPanicButton } = PanicButtonSlice.actions;

export default PanicButtonSlice.reducer;

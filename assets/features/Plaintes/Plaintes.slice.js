import { createSlice } from "@reduxjs/toolkit";
import {
  addPlaintesAsync,
  deletePlaintesAsync,
  editPlaintesAsync,
  getAllPlaintesAsync,
} from "./PlaintesAsyncApi";

const initialState = { collections: [], selected: [], error: "", status: "" };

const PlaintesSlice = createSlice({
  name: "Plaintes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPlaintesAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllPlaintesAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(getAllPlaintesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = payload;
      });
    builder
      .addCase(addPlaintesAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(addPlaintesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = [...state.collections, payload];
      });

    builder
      .addCase(editPlaintesAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(editPlaintesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let updateCollection = state.collections.map((plainte) => {
          if (plainte.id == payload.id) {
            return { ...payload };
          }
          return plainte;
        });
        state.collections = updateCollection;
      });
    builder
      .addCase(deletePlaintesAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(deletePlaintesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let updateCollection = state.collections.map(
          (plainte) => plainte.id != payload.id
        );
        state.collections = updateCollection;
      });
  },
});

export default PlaintesSlice.reducer;

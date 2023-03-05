import { createSlice } from "@reduxjs/toolkit";
import {
  addSaisiesAsync,
  deleteSaisieAsync,
  editSaisiesAsync,
  getAllSaisiesAsync,
  getOneSaisiesAsync,
} from "./SaisieAsyncApi";

const initialState = { collections: [], selected: [], error: "", status: "" };

const SaisieSlice = createSlice({
  name: "Saisie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllSaisiesAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getAllSaisiesAsync.fulfilled, (state, action) => {
        state.collections = action.payload;
        state.status = "complete";
      })
      .addCase(getAllSaisiesAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(getOneSaisiesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.selected = payload;
      })
      .addCase(getOneSaisiesAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(addSaisiesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = [payload, ...state.collections];
      })
      .addCase(addSaisiesAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(editSaisiesAsync.fulfilled, (state, action) => {
        const { payload } = action;
        const id = payload.id;
        let updateCollections = state.collections.map((saisie) => {
          if (saisie.id == id) {
            return { ...payload };
          }
          return saisie;
        });

        state.collections = updateCollections;
        state.selected = payload;
      })
      .addCase(editSaisiesAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      });

    builder
      .addCase(deleteSaisieAsync.fulfilled, (state, action) => {
        const { payload } = action;
        const saisieRemoved = state.collections.filter(
          (saisie) => saisie.id != payload.id
        );
        state.collections = saisieRemoved;
      })
      .addCase(deleteSaisieAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default SaisieSlice.reducer;

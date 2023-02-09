import { createSlice } from "@reduxjs/toolkit";
import {
  addRapportIncidentAsync,
  deleteRapportIncidentAsync,
  editRapportIncidentAsync,
  getAllRaportIncidentAsync,
  getOneRapportIncidentAsync,
} from "./RapportIncidentAsyncApi";

const initialState = { collections: [], selected: {}, error: "", status: "" };

const RapportincidentSlice = createSlice({
  name: "Rapportincident",
  initialState,
  reducers: {
    setError: (state, action) => {},
  },
  extraReducers: (builders) => {
    builders
      .addCase(getAllRaportIncidentAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getAllRaportIncidentAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
      })
      .addCase(getAllRaportIncidentAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload;
      })
      .addCase(getOneRapportIncidentAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getOneRapportIncidentAsync.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
    builders
      .addCase(addRapportIncidentAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addRapportIncidentAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = [payload, ...state.collections];
      });
    builders.addCase(editRapportIncidentAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateCollection = state.collections.map((rapport) => {
        if (rapport.id == payload.id) {
          return { ...payload };
        }
        return rapport;
      });

      state.collections = updateCollection;
    });
    builders.addCase(deleteRapportIncidentAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateCollection = state.collections.filter(
        (rapport) => rapport.id != payload.id
      );

      state.collections = updateCollection;
    });
  },
});

export default RapportincidentSlice.reducer;

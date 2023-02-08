import { createSlice } from "@reduxjs/toolkit";
import { getAllRaportIncidentAsync } from "./RapportIncidentAsyncApi";

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
      });
  },
});

export default RapportincidentSlice.reducer;

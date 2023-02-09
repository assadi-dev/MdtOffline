import { createSlice } from "@reduxjs/toolkit";
import { getAllRapportRookieAsync } from "./RapportRookieAsyncApi";

const initialState = { collections: [], selected: [], error: "", status: "" };

const RapportRookieSlice = createSlice({
  name: "RapportRookie",
  initialState,
  reducers: {
    setError: (state, action) => {},
  },
  extraReducers: (builders) => {
    builders
      .addCase(getAllRapportRookieAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getAllRapportRookieAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllRapportRookieAsync.fulfilled, (state, action) => {
        state.error = "";
        state.status = "complete";
        state.collections = action.payload;
      });
  },
});

export default RapportRookieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  deleteRapportRookieAsync,
  editRapportRookieAsync,
  getAllRapportRookieAsync,
  getOneRapportRookieAsync,
} from "./RapportRookieAsyncApi";

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
    builders
      .addCase(getOneRapportRookieAsync.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getOneRapportRookieAsync.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
    builders.addCase(editRapportRookieAsync.fulfilled, (state, action) => {
      let updateCollection = state.collections.map((rapport) => {
        const { payload } = action;
        if (rapport.id == payload.id) {
          return { ...payload };
        }
        return rapport;
      });
      state.collections = updateCollection;
    });
    builders.addCase(deleteRapportRookieAsync.fulfilled, (state, action) => {
      const { payload } = action;
      let updateCollection = state.collections.filter(
        (rapport) => rapport.id != payload.id
      );
      state.collections = updateCollection;
    });
  },
});

export default RapportRookieSlice.reducer;

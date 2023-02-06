import { createSlice } from "@reduxjs/toolkit";
import { getAllCivilsAsync, getOneCivilsAsync } from "./CivilAsyncApi";

const initialState = {
  collection: [],
  selected: [],
  filter: [],
  error: "",
  status: "",
};

export const CivilSlice = createSlice({
  name: "Civils",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errors = action.payload;
    },
    addCivil: (state, { payload }) => {
      state.collection = [...state.collection, payload];
      state.error = "";
    },
    uploadPhoto: (state, { payload }) => {
      let newStateCollection = state.collection;
      const civilIndex = newStateCollection.findIndex(
        (c) => c.id == payload.id
      );
      newStateCollection[civilIndex].photo = payload.photo;
      state.collection = newStateCollection;
      state.selected = { ...state.selected, photo: payload.photo };
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getAllCivilsAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getAllCivilsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collection = payload;
      })
      .addCase(getAllCivilsAsync.rejected, (state, { error }) => {
        state.error = error.message;
      });
    //Get One Civil
    builders
      .addCase(getOneCivilsAsync.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(getOneCivilsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.selected = payload;
      })
      .addCase(getOneCivilsAsync.rejected, (state, { error }) => {
        state.error = error.message;
      });
  },
});

export default CivilSlice.reducer;

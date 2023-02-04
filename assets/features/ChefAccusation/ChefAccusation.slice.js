import { createSlice } from "@reduxjs/toolkit";
import { getAllGradesAsync } from "../Grades/GradeAsyncApi";
import { getAllChefAccusationAsync } from "./ChefAccusationAsyncApi";

const initialState = {
  collections: [],
  selected: [],
  filtered: [],
  status: "",
  errors: "",
};

export const ChefAccusationSlice = createSlice({
  name: "ChefAccusation",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllChefAccusationAsync.pending, (state) => {
        state.status = "pending";
        state.errors = "";
      })
      .addCase(getAllChefAccusationAsync.rejected, (state, action) => {
        const { error } = action;
        state.errors = error.message;
      })
      .addCase(getAllChefAccusationAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.errors = "";
        state.collections = payload;
      });
  },
});

export const { setError } = ChefAccusationSlice.actions;

export default ChefAccusationSlice.reducer;

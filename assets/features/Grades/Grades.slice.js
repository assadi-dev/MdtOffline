import { createSlice } from "@reduxjs/toolkit";
import { addGradeAsync, getAllGradesAsync } from "./GradeAsyncApi";

const initialState = {
  collections: [],
  selected: [],
  filtered: [],
  status: "",
  errors: "",
};

export const GradesSlice = createSlice({
  name: "Grades",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGradesAsync.pending, (state) => {
        state.status = "paending";
        state.errors = "";
      })
      .addCase(getAllGradesAsync.fulfilled, (state, action) => {
        let newState = {
          ...state,
          collections: action.payload,
          status: "complete",
        };
        return newState;
      })
      .addCase(getAllGradesAsync.rejected, (state, action) => {
        let message = action.error.message;
        let newState = { ...state, errors: message, status: "rejected" };
        return newState;
      });
    builder
      .addCase(addGradeAsync.pending, (state) => {
        state.status = "pending";
        state.errors = "";
      })
      .addCase(addGradeAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.error.message;
      })
      .addCase(addGradeAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = [...state.collections, payload];
      });
  },
});

export default GradesSlice.reducer;

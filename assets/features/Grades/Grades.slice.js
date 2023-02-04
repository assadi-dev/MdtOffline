import { createSlice } from "@reduxjs/toolkit";
import {
  addGradeAsync,
  deleteGradeAsync,
  editGradeAsync,
  getAllGradesAsync,
} from "./GradeAsyncApi";

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
      .addCase(addGradeAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.error.message;
      })
      .addCase(addGradeAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.errors = "";
        state.collections = [...state.collections, payload];
        state.status = "complete";
      });
    builder
      .addCase(editGradeAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let updateGradeCollection = state.collections;
        updateGradeCollection = updateGradeCollection.map((grade) => {
          if (grade.id === payload.id) {
            return { ...payload };
          }
          return grade;
        });
        state.errors = "";
        state.collections = updateGradeCollection;
      })
      .addCase(editGradeAsync.rejected, (state, action) => {
        state.errors = action.errors;
      });
    builder
      .addCase(deleteGradeAsync.rejected, (state, action) => {
        const { error } = action;
        state.errors = error.message;
      })
      .addCase(deleteGradeAsync.fulfilled, (state, action) => {
        const { payload } = action;
        const id = payload.id;
        let removeGradeCollection = state.collections;
        removeGradeCollection = removeGradeCollection.filter(
          (grade) => grade.id != payload.id
        );
        state.collections = removeGradeCollection;
        state.errors = "";
        state.status = "complete";
      });
  },
});

export default GradesSlice.reducer;

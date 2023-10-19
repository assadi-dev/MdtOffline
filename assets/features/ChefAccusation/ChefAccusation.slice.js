import { createSlice } from "@reduxjs/toolkit";
import { getAllGradesAsync } from "../Grades/GradeAsyncApi";
import { getAllChefAccusationAsync } from "./ChefAccusationAsyncApi";
import uniqid from "uniqid";

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

    addChefAccusation: (state, action) => {
      const { payload } = action;
      state.collections = [...state.collections, { ...payload, id: uniqid() }];
    },
    editChefAccusation: (state, action) => {
      const { payload } = action;
      let updateCollection = [...state.collections].map((current) => {
        if (current.id == payload.id) {
          return { ...current, ...payload };
        }
        return current;
      });
      state.collections = updateCollection;
    },
    removeChefAccusation: (state, action) => {
      const { payload } = action;
      let updateCollection = [...state.collections].filter(
        (current) => current.id != payload.id
      );
      state.collections = updateCollection;
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

export const {
  setError,
  addChefAccusation,
  editChefAccusation,
  removeChefAccusation,
} = ChefAccusationSlice.actions;

export default ChefAccusationSlice.reducer;

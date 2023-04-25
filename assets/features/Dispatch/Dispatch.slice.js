import { createSlice } from "@reduxjs/toolkit";
import { dropLists } from "./initialState";
import { addCategoryDrop, sortDropList } from "./Dispatch.action";

const initialState = { dropLists: dropLists, status: "", errors: "" };

export const DispatchSlice = createSlice({
  name: "Dispatch",
  initialState,
  reducers: {
    drop: (state, action) => {
      const list = state.dropLists;
      sortDropList(list, action.payload);
      return state;
    },
    addCategory: (state, action) => {
      const list = state.dropLists;
      const { payload } = action;
      addCategoryDrop(list, payload);
      return state;
    },
  },
  /*  extraReducers: (builders) => {
    //builders.addCase()
  }, */
});

export const { drop, addCategory } = DispatchSlice.actions;

export default DispatchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { dropLists } from "./initialState";
import {
  addCategoryDrop,
  creatCardAgent,
  removeCardAgent,
  sortDropList,
} from "./Dispatch.action";

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
    generateAgentCard: (state, action) => {
      const { payload } = action;
      creatCardAgent(state, payload);
      return state;
    },

    deleteAgentCard: (state, action) => {
      const { payload } = action;
      return removeCardAgent(state, payload);
    },

    deleteCardItem: (state, action) => {
      return state;
    },
  },
  /*  extraReducers: (builders) => {
    //builders.addCase()
  }, */
});

export const { drop, addCategory, generateAgentCard, deleteAgentCard } =
  DispatchSlice.actions;

export default DispatchSlice.reducer;

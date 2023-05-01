import { createSlice, current } from "@reduxjs/toolkit";
import { dropLists } from "./initialState";
import {
  addCategoryDrop,
  creatCardAgent,
  find_categorie,
  removeCardAgent,
  remove_categorie,
  sortDropList,
} from "./Dispatch.action";

const initialState = {
  dropLists: dropLists,
  status: "",
  errors: "",
  selected: null,
};

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
      removeCardAgent(state, payload, current);
      return state;
    },

    deleteCardItem: (state, action) => {
      const { payload } = action;

      remove_categorie(state, payload, current);
      return state;
    },

    getSelectedCategorie: (state, action) => {
      const { payload } = action;
      state.selected = find_categorie(state, payload, current);
    },

    editSelectedCategorie: (state, action) => {
      return state;
    },

    clearCategorieSelected: (state) => {
      state.selected = null;
    },
  },
  /*  extraReducers: (builders) => {
    //builders.addCase()
  }, */
});

export const {
  drop,
  addCategory,
  generateAgentCard,
  deleteAgentCard,
  deleteCardItem,
  getSelectedCategorie,
  clearCategorieSelected,
} = DispatchSlice.actions;

export default DispatchSlice.reducer;

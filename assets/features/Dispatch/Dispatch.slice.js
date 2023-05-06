import { createSlice, current } from "@reduxjs/toolkit";
import { dropLists } from "./initialState";
import {
  addCategoryDrop,
  creatCardAgent,
  find_categorie,
  persist_dispatch_api,
  removeCardAgent,
  remove_categorie,
  sortDropList,
  update_categorie,
} from "./Dispatch.action";
import { getDispatchDataAsync } from "./DispatchAsyncApi";

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
    instanceState: (state, action) => {
      const { payload } = action;
      let newDropLists = payload.dropLists;
      state.dropLists = newDropLists;
      return state;
    },

    drop: (state, action) => {
      const list = state.dropLists;
      sortDropList(list, action.payload, current);
      let cleanState = current(state);
      let body = { currentState: cleanState, lastState: cleanState };
      persist_dispatch_api(body);
      return state;
    },
    addCategory: (state, action) => {
      const list = state.dropLists;
      const { payload } = action;
      addCategoryDrop(list, payload);
      let cleanState = current(state);
      let body = { currentState: cleanState, lastState: cleanState };
      persist_dispatch_api(body);
      return state;
    },
    generateAgentCard: (state, action) => {
      const { payload } = action;
      creatCardAgent(state, payload);
      let cleanState = current(state);
      let body = { currentState: cleanState, lastState: cleanState };
      persist_dispatch_api(body);
      return state;
    },

    deleteAgentCard: (state, action) => {
      const { payload } = action;
      removeCardAgent(state, payload, current);
      let cleanState = current(state);
      let body = { currentState: cleanState, lastState: cleanState };
      persist_dispatch_api(body);
      return state;
    },

    deleteCardItem: (state, action) => {
      const { payload } = action;

      remove_categorie(state, payload, current);
      let cleanState = current(state);
      let body = { currentState: cleanState, lastState: cleanState };
      persist_dispatch_api(body);
      return state;
    },

    getSelectedCategorie: (state, action) => {
      const { payload } = action;
      state.selected = find_categorie(state, payload, current);
    },

    editSelectedCategorie: (state, action) => {
      const { payload } = action;

      update_categorie(state, payload, current);

      state.selected = null;
      let cleanState = current(state);
      let body = { currentState: cleanState, lastState: cleanState };
      persist_dispatch_api(body);
      return state;
    },

    clearCategorieSelected: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getDispatchDataAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getDispatchDataAsync.fulfilled, (state, action) => {
        const { payload } = action;

        state.dropLists = payload.currentState.dropLists;
        state.status = "complete";
        state.errors = "";
      });
  },
});

export const {
  instanceState,
  drop,
  addCategory,
  generateAgentCard,
  deleteAgentCard,
  deleteCardItem,
  getSelectedCategorie,
  clearCategorieSelected,
  editSelectedCategorie,
} = DispatchSlice.actions;

export default DispatchSlice.reducer;

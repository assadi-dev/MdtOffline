import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  get_allChefAccusations,
  get_filteredChefAccusations,
} from "./ChefAccusationApi";

export const getAllChefAccusationAsync = createAsyncThunk(
  "ChefAccusation/fetchAll",
  async (payload, { signal }) => {
    try {
      const res = await get_allChefAccusations(signal);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const getFilteredChefAccusationsAsync = createAsyncThunk(
  "ChefAccusation/fetchFiltered",
  async (payload, { signal }) => {
    try {
      let params = { ...payload, signal };
      const res = await get_filteredChefAccusations(params);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

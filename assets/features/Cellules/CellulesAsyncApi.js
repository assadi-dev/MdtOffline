import { createAsyncThunk } from "@reduxjs/toolkit";
import { add_cellule } from "./CelluleApi";

//Cellule Async
export const addCelluleAsync = createAsyncThunk(
  "Cellule/add_cellule",
  async (payload) => {
    try {
      const res = await add_cellule(payload);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

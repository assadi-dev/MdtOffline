import { createAsyncThunk } from "@reduxjs/toolkit";
import { deletPanicButton, fetchAllPanicbutton } from "./PanicButton.api";

export const getAllPanicButtonAsync = createAsyncThunk(
  "PanicButton/fetchAll",
  async () => {
    try {
      const res = await fetchAllPanicbutton();
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.detail;
      }
      message = error.message;
      throw new Error(message);
    }
  }
);
export const deletePanicButtonAsync = createAsyncThunk(
  "PanicButton/delete",
  async ({ id }) => {
    try {
      await deletPanicButton(id);
      return { id };
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.detail;
      }
      message = error.message;
      throw new Error(message);
    }
  }
);

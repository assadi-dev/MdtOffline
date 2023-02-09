import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllRapportRookie } from "./RapportRookieApi";

export const getAllRapportRookieAsync = createAsyncThunk(
  "RapportRookie/fetchAll",
  async () => {
    try {
      const res = await fetchAllRapportRookie();
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        messsage = error.response.data.detail;
      } else {
        messsage = error.message;
      }
      throw new Error(message);
    }
  }
);

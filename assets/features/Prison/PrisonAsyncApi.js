import { createAsyncThunk } from "@reduxjs/toolkit";
import { add_prison } from "./PrisonApi";

//Prison Async
export const addPrisonAsync = createAsyncThunk(
  "Prison/Add",
  async (payload) => {
    try {
      const res = await add_prison(payload);
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

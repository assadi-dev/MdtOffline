import { createAsyncThunk } from "@reduxjs/toolkit";
import { load_dispatch_data } from "./Dispatch.action";

export const getDispatchDataAsync = createAsyncThunk(
  "Dispatch/fetchData",
  async () => {
    try {
      const res = await load_dispatch_data();
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

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllConvocation,
  addConvocation,
  deleteConvocation,
} from "./ConvocationApi";

export const getAllConvocationAsync = createAsyncThunk(
  "Convocation/fetchAll",
  async () => {
    try {
      const res = await fetchAllConvocation();
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

export const addConvocationAsync = createAsyncThunk(
  "Convocation/Add",
  async (payload) => {
    try {
      const res = await addConvocation(payload);
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

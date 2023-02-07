import { createAsyncThunk } from "@reduxjs/toolkit";
import { add_traffic, delete_traffic, edit_traffic } from "./TrafficApi";

//Traffic Async
export const addTrafficAsync = createAsyncThunk(
  "Traffic/add_traffic",
  async (payload) => {
    try {
      const res = await add_traffic(payload);
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

export const editTrafficAsync = createAsyncThunk(
  "Traffic/edit_traffic",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_traffic(id, data);
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

export const deleteTrafficAsync = createAsyncThunk(
  "Traffic/delete_traffic",
  async (payload) => {
    try {
      const { id } = payload;
      const res = await delete_traffic(id);
      return { id };
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

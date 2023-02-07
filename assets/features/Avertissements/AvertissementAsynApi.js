import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_Avertissement,
  delete_avertissement,
  edit_Avertissement,
} from "./AvertissementApi";

//Avertissement Async
export const addAvertissementAsync = createAsyncThunk(
  "Avertissement/Add",
  async (payload) => {
    try {
      const res = await add_Avertissement(payload);
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

export const editAvertissementAsync = createAsyncThunk(
  "Avertissement/Edit",
  async (payload) => {
    const { id, data } = payload;
    console.log(payload);
    try {
      const res = await edit_Avertissement(id, data);
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

export const deleteAvertissementAsync = createAsyncThunk(
  "Avertissement/Delete",
  async (payload) => {
    const { id } = payload;
    try {
      delete_avertissement(id);
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

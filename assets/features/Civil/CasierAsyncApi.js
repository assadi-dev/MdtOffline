import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_Avertissement,
  add_traffic,
  delete_avertissement,
  edit_Avertissement,
} from "./CivilApi";

//Avertissement Async
export const addAvertissementAsync = createAsyncThunk(
  "Civil/add_Avertissement",
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
  "Civil/edit_Avertissement",
  async (payload) => {
    const { id, data } = payload;
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
  "Civil/delete_Avertissement",
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

//Traffic Async
export const addTrafficAsync = createAsyncThunk(
  "Civil/add_traffic",
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

//RAPPORT D'ARRESTATION Async

//DOSSIER D'ARRESTATION Async

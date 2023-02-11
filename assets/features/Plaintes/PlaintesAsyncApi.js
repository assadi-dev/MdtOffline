import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_plaintes,
  delete_plaintes,
  fetchAllPlaintes,
  fetchOnePlaintes,
  update_plaintes,
} from "./PlaintesApi";

export const getAllPlaintesAsync = createAsyncThunk(
  "Plaintes/fetchAll",
  async () => {
    try {
      const res = await fetchAllPlaintes();
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

export const getOnePlaintesAsync = createAsyncThunk(
  "Plaintes/fetchOne",
  async (payload) => {
    const { id } = payload;
    try {
      const res = await fetchOnePlaintes(id);
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

export const addPlaintesAsync = createAsyncThunk(
  "Plaintes/add",
  async (payload) => {
    try {
      const res = await add_plaintes(payload);
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

export const editPlaintesAsync = createAsyncThunk(
  "Plaintes/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await update_plaintes(id, data);
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

export const deletePlaintesAsync = createAsyncThunk(
  "Plaintes/delete",
  async (payload) => {
    try {
      const { id } = payload;
      delete_plaintes(id);
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

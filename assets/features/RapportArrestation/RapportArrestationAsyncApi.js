import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_rapportArrestation,
  delete_rapportArrestation,
  edit_rapportArrestation,
} from "./RapportArrestationApi";

export const addRapportArrestationAsync = createAsyncThunk(
  "RapportArrestation/add",
  async (payload) => {
    try {
      const res = await add_rapportArrestation(payload);
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

export const editRapportArrestationAsync = createAsyncThunk(
  "RapportArrestation/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_rapportArrestation(id, data);
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

export const deleteRapportArrestationAsync = createAsyncThunk(
  "RapportArrestation/delete",
  async (payload) => {
    try {
      const { id } = payload;
      delete_rapportArrestation(id);
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

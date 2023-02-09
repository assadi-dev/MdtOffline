import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  edit_rapportRookie,
  fetchAllRapportRookie,
  fetchOneRapportRookie,
} from "./RapportRookieApi";

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

export const getOneRapportRookieAsync = createAsyncThunk(
  "RapportRookie/fetchOne",
  async (payload) => {
    try {
      const { id } = payload;
      const res = await fetchOneRapportRookie(id);
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

export const editRapportRookieAsync = createAsyncThunk(
  "RapportRookie/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_rapportRookie(id, data);
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

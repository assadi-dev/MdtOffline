import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_saisie,
  delete_saisie,
  edit_saisie,
  fetchAllSaisies,
  fetchOneSaisie,
} from "./Saisie.api";

export const getAllSaisiesAsync = createAsyncThunk(
  "Saisies/fetchAll",
  async () => {
    try {
      const res = await fetchAllSaisies();
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

export const getOneSaisiesAsync = createAsyncThunk(
  "Saisies/fetchOne",
  async (payload) => {
    try {
      const { id } = payload;
      const res = await fetchOneSaisie(id);
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

export const editSaisiesAsync = createAsyncThunk(
  "Saisies/Edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_saisie(id, data);
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

export const addSaisiesAsync = createAsyncThunk(
  "Saisies/add",
  async (payload) => {
    try {
      const res = await add_saisie(payload);
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

export const deleteSaisieAsync = createAsyncThunk(
  "Saisie/delete",
  async (payload) => {
    try {
      const { id } = payload;

      delete_saisie(id);
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

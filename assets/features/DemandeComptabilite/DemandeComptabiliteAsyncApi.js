import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_demandeComptabilite,
  delete_demandeComptabilite,
  edit_demandeComptabilite,
  fetchAllDemandeComptabilite,
  fetchOneDemandeComptabilite,
} from "./DemandeComptabiliteApi";

export const getAllDemandeComptabiliteAsync = createAsyncThunk(
  "DemandeComptabilite/fetchAll",
  async () => {
    try {
      const res = await fetchAllDemandeComptabilite();
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

export const getOneDemandeComptabiliteAsync = createAsyncThunk(
  "DemandeComptabilite/fetchAOne",
  async (payload) => {
    try {
      const { id } = payload;
      const res = await fetchOneDemandeComptabilite(id);
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

export const addDemandeComptabiliteAsync = createAsyncThunk(
  "DemandeComptabilite/Add",
  async (payload) => {
    try {
      const res = await add_demandeComptabilite(payload);
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

export const deleteDemandeComptabiliteAsync = createAsyncThunk(
  "DemandeComptabilite/delete",
  async (payload) => {
    try {
      const { id } = payload;
      delete_demandeComptabilite(id);
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

export const editDemandeComptabiliteAsync = createAsyncThunk(
  "DemandeComptabilite/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_demandeComptabilite(id, data);
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

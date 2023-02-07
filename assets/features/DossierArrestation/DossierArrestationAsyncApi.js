import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_dossierArrestation,
  delete_dossierArrestation,
  edit_dossierArrestation,
  enCloseArrestFolder,
} from "./DossierArrestationApi";

//DOSSIER D'ARRESTATION Async
export const addDossierArrestationAsync = createAsyncThunk(
  "DossierArrestation/Add",
  async (payload) => {
    try {
      const res = await add_dossierArrestation(payload);
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

export const editDossierArrestationAsync = createAsyncThunk(
  "DossierArrestation/Edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_dossierArrestation(id, data);
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

export const deleteDossierArrestationAsync = createAsyncThunk(
  "DossierArrestation/Delete",
  async (payload) => {
    try {
      const { id } = payload;
      delete_dossierArrestation(id);
      return payload;
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

export const encloseAresstFolderAsync = createAsyncThunk(
  "DossierArrestation/cloturation",
  async (payload) => {
    try {
      const { id } = payload;
      const res = await enCloseArrestFolder(id);
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

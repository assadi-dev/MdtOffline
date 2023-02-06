import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_Avertissement,
  add_rapportArrestation,
  add_traffic,
  delete_avertissement,
  delete_rapportArrestation,
  delete_traffic,
  edit_Avertissement,
  edit_rapportArrestation,
  edit_traffic,
} from "./CivilApi";

//Avertissement Async
export const addCivilAvertissementAsync = createAsyncThunk(
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

export const editCivilAvertissementAsync = createAsyncThunk(
  "Civil/edit_Avertissement",
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

export const deleteCivilAvertissementAsync = createAsyncThunk(
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
export const addCivilTrafficAsync = createAsyncThunk(
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

export const editCivilTrafficAsync = createAsyncThunk(
  "Civil/edit_traffic",
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

export const deleteCivilTrafficAsync = createAsyncThunk(
  "Civil/delete_traffic",
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

//RAPPORT D'ARRESTATION Async

export const addCivilRapportArrestationAsync = createAsyncThunk(
  "Civil/add_rapportArrestation",
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

export const editCivilRapportArrestationAsync = createAsyncThunk(
  "Civil/edit_rapportArrestation",
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

export const deleteCivilRapportArrestationAsync = createAsyncThunk(
  "Civil/delete_rapportArrestation",
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

//DOSSIER D'ARRESTATION Async
export const addDossierArrestationAsync = createAsyncThunk(
  "Civil/add_dossierArrestation",
  async (payload) => {
    try {
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

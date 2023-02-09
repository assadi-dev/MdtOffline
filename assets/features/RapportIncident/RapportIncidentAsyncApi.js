import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_rapportIncident,
  delete_rapportIncident,
  edit_rapportIncident,
  fetchAllRapportIncident,
  fetchOneRapportIncident,
} from "./RapportIncidentApi";

export const getAllRaportIncidentAsync = createAsyncThunk(
  "RapportIncident/fetchAll",
  async () => {
    try {
      const res = await fetchAllRapportIncident();
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

export const getOneRapportIncidentAsync = createAsyncThunk(
  "",
  async (payload) => {
    try {
      const res = await fetchOneRapportIncident(payload.id);
    } catch (error) {
      let message = "RapportIncident/fetchOne";
      if (error.response) {
        message = error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const addRapportIncidentAsync = createAsyncThunk(
  "RapportIncident/add",
  async (payload) => {
    try {
      const res = await add_rapportIncident(payload.data);
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

export const editRapportIncidentAsync = createAsyncThunk(
  "RapportIncident/edit",
  async (payload) => {
    try {
      const res = await edit_rapportIncident(payload.id, payload.data);
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

export const deleteRapportIncidentAsync = createAsyncThunk(
  "RapportIncident/delete",
  async (payload) => {
    try {
      delete_rapportIncident(payload.id);
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

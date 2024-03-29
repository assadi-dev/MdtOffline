import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCivil,
  editCivil,
  fetchAllCivils,
  fetchAllCivilsNextPage,
  fetchOneCivil,
  searchCivil,
  uploadPhotoCivil,
} from "./CivilApi";

export const getAllCivilsAsync = createAsyncThunk(
  "Civils/fetchAll",
  async (payload, { signal }) => {
    try {
      const res = await fetchAllCivils();
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

export const getOneCivilsAsync = createAsyncThunk(
  "Civils/fetchOne",
  async (payload, { signal }) => {
    try {
      const { id } = payload;
      const res = await fetchOneCivil(id);
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

export const fetchAllCivilsNextPageAsync = createAsyncThunk(
  "Civil/nextpage",
  async (payload) => {
    try {
      let page = payload;

      const res = await fetchAllCivilsNextPage(page);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const addCivilAsync = createAsyncThunk("Civils/add", async (payload) => {
  try {
    const { data } = payload;
    const res = await addCivil(data);
    return res.data;
  } catch (error) {
    let message = "";
    if (error.response) {
      message = error.response.detail;
    } else {
      message = error.message;
    }
    throw new Error(message);
  }
});

export const editCivilAsync = createAsyncThunk(
  "Civil/edit",
  async (payload) => {
    try {
      const { id, data } = payload;

      const res = await editCivil(id, data);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const searchCivilAsync = createAsyncThunk(
  "Civil/search",
  async (searchTerm) => {
    try {
      const res = await searchCivil(searchTerm);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const uploadPhotoCivilAsync = createAsyncThunk(
  "Civil/UploadPhoto",
  async (payload) => {
    try {
      const { id, photo } = payload;
      let formData = new FormData();
      formData.append("photo", photo);
      const res = await uploadPhotoCivil(id, formData);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

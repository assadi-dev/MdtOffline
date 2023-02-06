import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCivils, fetchOneCivil } from "./CivilApi";

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

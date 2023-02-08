import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllRapportIncident } from "./RapportIncidentApi";

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllAgents } from "./AgentApi";

export const getAllAgentAsync = createAsyncThunk(
  "Agent/fetchAll",
  async (payload, { signal }) => {
    try {
      const res = await fetchAllAgents(signal);
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

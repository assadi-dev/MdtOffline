import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_agent,
  edit_agent,
  fetchAllAgents,
  fetch_one,
  updateisPaidService,
} from "./AgentApi";
import { async } from "regenerator-runtime";
import { updatePaidUser } from "./Agent.slice";

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

export const getOneAgentAsync = createAsyncThunk(
  "Agent/fetchOne",
  async (agentId, { signal }) => {
    try {
      const res = await fetch_one(agentId, signal);
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

export const editAgentAsync = createAsyncThunk(
  "Agent/edit",
  async (payload, { signal }) => {
    try {
      const { id, data } = payload;
      const res = await edit_agent(id, data);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        if (error.response.data) {
          if (error.response.data.violations) {
            message = error.response.data.violations[0].message;
            throw new Error(message);
          } else {
            message = error.response.data.detail;
          }
        }
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

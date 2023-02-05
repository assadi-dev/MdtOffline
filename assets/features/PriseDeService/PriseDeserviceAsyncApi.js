import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_priseServices,
  delete_priseServices,
  edit_priseServices,
  fetchAllServices,
  fetchLastService,
  fetchLasteActiveService,
  fetchOneprisedeService,
  fetchServiceByWeek,
  fetchUserServiceByWeek,
} from "./PriseDeServiceApi";

export const getAllPrisesDeServicesAsync = createAsyncThunk(
  "Prise-de-service/fetchAll",
  async (payload, { signal }) => {
    try {
      const res = await fetchAllServices(signal);
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

export const getOneServiceAsync = createAsyncThunk(
  "Prise-de-service/fetchOne",
  async (payload, { signal }) => {
    try {
      const id = payload.id;
      const res = await fetchOneprisedeService(id);
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

export const getPriseServiceByWeekAsync = createAsyncThunk(
  "Prise-de-service/fetchByWeek",
  async (payload, { signal }) => {
    try {
      const week = payload.week;
      const res = await fetchServiceByWeek(week, signal);
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

export const getUserPriseServiceByWeekAsync = createAsyncThunk(
  "Prise-de-service/fetchUserByWeek",
  async (payload, { signal }) => {
    try {
      const { agent, week } = payload;
      const res = await fetchUserServiceByWeek(agent, week, signal);
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

export const getLastServiceAsync = createAsyncThunk(
  "Prise-de-service/fetchLast",
  async (payload, { signal }) => {
    try {
      const { agent } = payload;
      const res = await fetchLastService(agent, signal);
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

export const getLastActiveServiceAsync = createAsyncThunk(
  "Prise-de-service/LastActive",
  async (payload, { signal }) => {
    try {
      const agent = payload.agent;
      const res = await fetchLasteActiveService(agent, signal);
      return res.data[0];
    } catch (error) {}
  }
);

export const addServiceAsync = createAsyncThunk(
  "Prise-de-service/add",
  async (payload) => {
    try {
      const res = await add_priseServices(payload);
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

export const editServiceAsync = createAsyncThunk(
  "Prise-de-service/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_priseServices(id, data);
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

export const deleteServiceAsync = createAsyncThunk(
  "Prise-de-service/delete",
  async (payload) => {
    try {
      const { id } = payload;
      delete_priseServices(id);
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

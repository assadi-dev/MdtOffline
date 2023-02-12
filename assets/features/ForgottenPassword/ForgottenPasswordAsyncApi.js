import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_ForgottenPassword,
  edit_ForgottenPassword,
  fetAllForgottenPassword,
} from "./ForgottenPasswordApi";

export const getAllForgottenPasswordAsync = createAsyncThunk(
  "ForgottenPassword/fetchAll",
  async () => {
    try {
      const res = await fetAllForgottenPassword();
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

export const addForgottenPasswordAsync = createAsyncThunk(
  "ForgottenPassword/add",
  async (payload) => {
    try {
      const res = await add_ForgottenPassword(payload);
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

export const editForgottenPasswordAsync = createAsyncThunk(
  "ForgottenPassword/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const res = await edit_ForgottenPassword(id, data);
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

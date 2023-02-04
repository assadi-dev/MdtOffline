import { createAsyncThunk } from "@reduxjs/toolkit";
import { async } from "regenerator-runtime";
import { delete_user, get_allUsers, validation_user } from "./UserApi";

export const getAllUsersAsync = createAsyncThunk(
  "User/fetchAll",
  async (payload, { signal }) => {
    try {
      const res = await get_allUsers(signal);
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

export const validateUsersAsync = createAsyncThunk(
  "User/validateAccount",
  async (payload, { signal }) => {
    const { id, data } = payload;
    try {
      const res = await validation_user(id, data);
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

export const deleteUsersAsync = createAsyncThunk(
  "User/deleteAccount",
  async (payload, { signal }) => {
    const { id } = payload;
    try {
      const res = await delete_user(id);
      return { id };
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

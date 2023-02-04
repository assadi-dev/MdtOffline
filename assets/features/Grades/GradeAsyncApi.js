import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  add_grade,
  delete_grades,
  edit_grades,
  get_allGrades,
} from "./GradesApi";

export const getAllGradesAsync = createAsyncThunk(
  "Grades/fetchAll",
  async (payload, { signal }) => {
    try {
      const response = await get_allGrades(signal);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const addGradeAsync = createAsyncThunk("Grades/Add", async (payload) => {
  try {
    const response = await add_grade(payload);
    return response.data;
  } catch (error) {
    let message = "";
    if (error.response) {
      message = error.response.data.error;
    } else {
      message = error.message;
    }
    throw new Error(message);
  }
});

export const editGradeAsync = createAsyncThunk(
  "Grades/edit",
  async (payload) => {
    try {
      const { id, data } = payload;
      const response = await edit_grades(id, data);
      return response.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.error;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const deleteGradeAsync = createAsyncThunk(
  "Grades/delete",
  async (payload) => {
    try {
      const { id } = payload;
      const response = await delete_grades(id);
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

import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import {
  ADD_RAPPORT_ARRESTATION,
  DELETE_RAPPORT_ARRESTATION,
  EDIT_RAPPORT_ARRESTATION,
} from "../types/RapportArrestation.type";

export const add_rapportArrestation = (data) => {
  return async (dispatch) => {
    try {
      const res = await Api.post("/arrest_reports", data);
      let result = res.data;
      dispatch({ type: ADD_RAPPORT_ARRESTATION, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const edit_rapportArrestation = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await Api.put(`/arrest_reports/${id}`, data);
      let result = res.data;
      dispatch({ type: EDIT_RAPPORT_ARRESTATION, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const delete_rapportArrestation = (id) => {
  return async (dispatch) => {
    try {
      const res = await Api.delete(`/arrest_reports/${id}`);
      dispatch({ type: DELETE_RAPPORT_ARRESTATION, payload: { id } });
    } catch (error) {
      console.log(error.message);
    }
  };
};

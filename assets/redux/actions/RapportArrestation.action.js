import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import {
  ADD_RAPPORT_ARRESTATION,
  EDIT_RAPPORT_ARRESTATION,
} from "../types/RapportArrestation.type";

export const add_rapportArrestation = (data, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    try {
      const res = await Api.post("/arrest_reports", data, headers);
      let result = res.data;
      dispatch({ type: ADD_RAPPORT_ARRESTATION, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const edit_rapportArrestation = (id, data, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    try {
      const res = await Api.put(`/arrest_reports/${id}`, data, headers);
      let result = res.data;
      dispatch({ type: EDIT_RAPPORT_ARRESTATION, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

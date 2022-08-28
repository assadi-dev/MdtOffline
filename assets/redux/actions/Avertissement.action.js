import Api from "../../service/Api/Api";
import {
  ADD_AVERTISSEMENT,
  DELETE_AVERTISSEMENT,
} from "../types/avertissements..type";

export const getAvertissementByCivil = (id) => {
  return async (dispatch) => {
    try {
      Api.get();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addAvertissement = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/avertissements", data).then((res) => {
        let data = res.data;
        dispatch({ type: ADD_AVERTISSEMENT, payload: data });
      });
    } catch (error) {}
  };
};

export const delete_avertissement = (id) => {
  return async (dispatch) => {
    try {
      Api.delete(`/avertissements/${id}`).then((res) => {
        dispatch({ type: DELETE_AVERTISSEMENT, payload: id });
      });
    } catch (error) {}
  };
};

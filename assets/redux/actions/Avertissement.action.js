import Api from "../../service/Api/Api";
import {
  ADD_AVERTISSEMENT,
  DELETE_AVERTISSEMENT,
} from "../types/avertissements..type";

export const getAvertissementByCivil = (id, token) => {
  return async (dispatch) => {
    try {
      Api.get();
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addAvertissement = (data, token) => {
  return async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      Api.post("/avertissements", data, headers).then((res) => {
        let data = res.data;
        dispatch({ type: ADD_AVERTISSEMENT, payload: data });
      });
    } catch (error) {}
  };
};

export const delete_avertissement = (id, token) => {
  return async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      Api.delete(`/avertissements/${id}`, headers).then((res) => {
        dispatch({ type: DELETE_AVERTISSEMENT, payload: id });
      });
    } catch (error) {}
  };
};

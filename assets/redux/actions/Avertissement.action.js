import Api from "../../service/Api/Api";
import {
  ADD_AVERTISSEMENT,
  DELETE_AVERTISSEMENT,
  GET_ONE_AVERTISSEMENT,
} from "../types/avertissements..type";
import { setHeader } from "../../service/Api/options";

export const findOneAvertissement = (id, token) => {
  let headers = setHeader(token);

  return async (dispatch) => {
    try {
      Api.get(`/avertissements/${id}`, headers).then((res) => {
        dispatch({ type: GET_ONE_AVERTISSEMENT, payload: res.data });
      });
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

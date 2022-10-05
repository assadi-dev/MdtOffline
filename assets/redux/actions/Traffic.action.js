import Api from "../../service/Api/Api";
import {
  ADD_TRAFFIC,
  DELETE_TRAFFIC,
  EDIT_TRAFFIC,
} from "../types/Traffic.type";
import { setHeader } from "../../service/Api/options";

export const add_traffic = (data) => {
  return async (dispatch) => {
    try {
      const rest = await Api.post("/traffic", data);
      let result = rest.data;
      dispatch({ type: ADD_TRAFFIC, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const edit_traffic = (id, data) => {
  return async (dispatch) => {
    try {
      const rest = await Api.put(`/traffic/${id}`, data);
      let result = rest.data;
      dispatch({ type: EDIT_TRAFFIC, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deletet_traffic = (id) => {
  return async (dispatch) => {
    try {
      Api.delete(`/traffic/${id}`).then(() =>
        dispatch({ type: DELETE_TRAFFIC, payload: { id } })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

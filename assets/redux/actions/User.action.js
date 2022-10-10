import Api from "../../service/Api/Api";
import {
  DELETE_USER,
  EDIT_USER,
  GET_ALL_USER,
  TOGGLE_VALIDATE_USER,
} from "../types/User.type";

export const get_allUsers = () => {
  return async (dispatch) => {
    try {
      Api.get("/users").then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_USER, payload: data });
      });
    } catch (error) {
      log.error(error);
    }
  };
};

export const get_singleUser = (id) => {
  return async (dispatch) => {
    try {
      Api.get(`/users/${id}`).then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_USER, payload: data });
      });
    } catch (error) {
      log.error(error);
    }
  };
};

export const validation_user = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_VALIDATE_USER, payload: { ...data, id } });
      Api.put(`/users/${id}`, data).then((res) => {
        const data = res.data;
        dispatch({ type: TOGGLE_VALIDATE_USER, payload: data });
      });
    } catch (error) {
      log.error(error);
    }
  };
};

export const edit_user = (id, data) => {
  return async (dispatch) => {
    try {
      Api.put(`/users/${id}`, data).then((res) => {
        const data = res.data;
        dispatch({ type: EDIT_USER, payload: data });
      });
    } catch (error) {
      log.error(error);
    }
  };
};

export const delete_user = (id, data) => {
  return async (dispatch) => {
    try {
      Api.delete(`/users/${id}`).then((res) => {
        const data = res.data;
        dispatch({ type: DELETE_USER, payload: data });
      });
    } catch (error) {
      log.error(error);
    }
  };
};

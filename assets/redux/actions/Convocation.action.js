import Api from "../../service/Api/Api";
import {
  ADD_CONVOCATION,
  GET_ALL_CONVOCATION,
} from "../types/Convocation.type";
export const get_all_convocation = (token) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    try {
      Api.get("/convocations", headers).then((res) => {
        dispatch({ type: GET_ALL_CONVOCATION, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const add_convocation = (data, token) => {
  return async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      Api.post("/convocations", data, headers).then((res) => {
        dispatch({ type: ADD_CONVOCATION, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

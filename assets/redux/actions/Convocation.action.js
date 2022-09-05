import Api from "../../service/Api/Api";
import {
  ADD_CONVOCATION,
  GET_ALL_CONVOCATION,
} from "../types/Convocation.type";
export const get_all_convocation = () => {
  return async (dispatch) => {
    try {
      Api.get("/convocations").then((res) => {
        dispatch({ type: GET_ALL_CONVOCATION, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const add_convocation = () => {
  return async (dispatch) => {
    try {
      Api.post("/convocations", data).then((res) => {
        dispatch({ type: ADD_CONVOCATION, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

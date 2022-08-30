import Api from "../../service/Api/Api";
import { ADD_TRAFFIC } from "../types/Traffic.type";

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

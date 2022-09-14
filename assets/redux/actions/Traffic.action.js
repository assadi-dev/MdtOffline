import Api from "../../service/Api/Api";
import { ADD_TRAFFIC } from "../types/Traffic.type";

export const add_traffic = (data, token) => {
  return async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const rest = await Api.post("/traffic", data, headers);
      let result = rest.data;
      dispatch({ type: ADD_TRAFFIC, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

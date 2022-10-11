import Api from "../../service/Api/Api";
import { ADD_PLAINTE, GET_ALL_PLAINTE } from "../types/Plainte.type";

export const get_allPlainte = () => {
  return async (dispatch) => {
    try {
      Api.get("/plaintes").then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_PLAINTE, payload: data });
      });
    } catch (error) {}
  };
};

export const add_plainte = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/plaintes", data).then((res) => {
        const data = res.data;
        dispatch({ type: ADD_PLAINTE, payload: data });
      });
    } catch (error) {}
  };
};

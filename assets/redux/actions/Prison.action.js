import Api from "../../service/Api/Api";
import { ADD_CELLULE, GET_ALL_CELLULE } from "../types/Cellule.type";
import { ADD_PRISON, GET_ALL_PRISON } from "../types/Prison.type";

export const get_all_prison = () => {
  return async (dispatch) => {
    try {
      Api.get("/prisons").then((res) => {
        dispatch({ type: GET_ALL_PRISON, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const add_prison = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/prisons", data).then((res) => {
        dispatch({ type: ADD_PRISON, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

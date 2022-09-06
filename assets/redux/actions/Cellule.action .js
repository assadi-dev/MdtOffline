import Api from "../../service/Api/Api";
import { ADD_CELLULE, GET_ALL_CELLULE } from "../types/Cellule.type";

export const get_all_cellule = () => {
  return async (dispatch) => {
    try {
      Api.get("/cellules").then((res) => {
        dispatch({ type: GET_ALL_CELLULE, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const add_cellule = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/cellules", data).then((res) => {
        dispatch({ type: ADD_CELLULE, payload: res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

import Api from "../../service/Api/Api";
import { ADD_RAPPORT_ARRESTATION } from "../types/RapportArrestation.type";

export const add_rapportArrestation = (data) => {
  return async (dispatch) => {
    try {
      const res = await Api.post("/arrest_reports", data);
      let result = res.data;
      dispatch({ type: ADD_RAPPORT_ARRESTATION, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

import Api from "../../service/Api/Api";
import { ADD_DOSSIER_ARRESTATION } from "../types/DossierArrestation.type";

export const add_dossierArrestation = (data) => {
  return async (dispatch) => {
    try {
      // let res = await Api.post("/arrest_folders")
      dispatch({ type: ADD_DOSSIER_ARRESTATION, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

import Api from "../../service/Api/Api";
import { ENCLOSE_ARREST_FOLDER } from "../types/civil.type";
import { ADD_DOSSIER_ARRESTATION } from "../types/DossierArrestation.type";

export const add_dossierArrestation = (data, token) => {
  return async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      let res = await Api.post("/arrest_folders", data, headers);
      dispatch({ type: ADD_DOSSIER_ARRESTATION, payload: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const enCloseArrestFolder = (id, token) => {
  return async (dispatch) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      Api.put(
        `/arrest_folders/${id}`,
        {
          isEnclose: true,
          enclosedAt: new Date(),
        },
        headers
      ).then((res) => {
        dispatch({ payload: id, type: ENCLOSE_ARREST_FOLDER });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

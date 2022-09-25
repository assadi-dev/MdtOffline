import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import { ENCLOSE_ARREST_FOLDER } from "../types/civil.type";
import {
  ADD_DOSSIER_ARRESTATION,
  DELETE_DOSSIER_ARRESTATION,
  EDIT_DOSSIER_ARRESTATION,
} from "../types/DossierArrestation.type";

export const add_dossierArrestation = (data, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    try {
      let res = await Api.post("/arrest_folders", data, headers);
      dispatch({ type: ADD_DOSSIER_ARRESTATION, payload: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const edit_dossierArrestation = (id, data, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    try {
      Api.put(`/arrest_folders/${id}`, data, headers).then((res) => {
        dispatch({ type: EDIT_DOSSIER_ARRESTATION, payload: res.data });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const delete_dossierArrestation = (id, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    try {
      Api.delete(`/arrest_folders/${id}`, headers).then((res) => {
        dispatch({ type: DELETE_DOSSIER_ARRESTATION, payload: { id } });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const enCloseArrestFolder = (id, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
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

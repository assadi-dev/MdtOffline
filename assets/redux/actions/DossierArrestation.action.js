import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import { addDateByHour, obtainDate } from "../../utils/dateFormat";
import { ENCLOSE_ARREST_FOLDER } from "../types/civil.type";
import {
  ADD_DOSSIER_ARRESTATION,
  DELETE_DOSSIER_ARRESTATION,
  EDIT_DOSSIER_ARRESTATION,
} from "../types/DossierArrestation.type";
import { add_rapportArrestation } from "./RapportArrestation.action";

export const add_dossierArrestation = (data) => {
  return async (dispatch) => {
    try {
      let res = await Api.post("/arrest_folders", data);
      dispatch({ type: ADD_DOSSIER_ARRESTATION, payload: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const edit_dossierArrestation = (id, data) => {
  return async (dispatch) => {
    try {
      Api.put(`/arrest_folders/${id}`, data).then((res) => {
        dispatch({ type: EDIT_DOSSIER_ARRESTATION, payload: res.data });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const delete_dossierArrestation = (id) => {
  return async (dispatch) => {
    try {
      Api.delete(`/arrest_folders/${id}`).then((res) => {
        dispatch({ type: DELETE_DOSSIER_ARRESTATION, payload: { id } });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const enCloseArrestFolder = (id) => {
  return async (dispatch) => {
    try {
      Api.put(`/arrest_folders/${id}`, {
        isEnclose: false,
        enclosedAt: new Date(),
      }).then((res) => {
        const {
          infractions,
          lieux,
          entreeCellule,
          civil,
          amende,
          peine,
          idAgent,
          rapport,
        } = res.data;
        // dispatch({ payload: id, type: ENCLOSE_ARREST_FOLDER });
        let createArrestReaport = {
          infractions,
          lieux,
          entreeCellule,
          infractions,
          civil: `api/civils/${civil.id}`,
          amende: amende.toString(),
          peine,
          idAgent: Number(idAgent),
          arrestFolder: `api/arrest_folders/${id}`,
          conversionUp: false,
        };

        // dispatch(add_rapportArrestation(createArrestReaport));
        let dateEntree = `${obtainDate()} ${entreeCellule}`;
        let dateSortie = addDateByHour(entreeDateFormat, peine);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

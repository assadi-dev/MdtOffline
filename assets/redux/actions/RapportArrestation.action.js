import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import { addDateByHour, obtainDate } from "../../utils/dateFormat";
import {
  ADD_RAPPORT_ARRESTATION,
  DELETE_RAPPORT_ARRESTATION,
  EDIT_RAPPORT_ARRESTATION,
} from "../types/RapportArrestation.type";
import { add_cellule } from "./Cellule.action ";

export const add_rapportArrestation = (data) => {
  return async (dispatch) => {
    try {
      return new Promise((resolve, reject) => {
        Api.post("/arrest_reports", data)
          .then((res) => {
            let result = res.data;
            dispatch({ type: ADD_RAPPORT_ARRESTATION, payload: result });

            const { entreeCellule, peine } = result;
            const { idAgent, civil } = data;

            let dateEntree = `${obtainDate()} ${entreeCellule}`;
            let dateSortie = addDateByHour(dateEntree, peine);

            let arrestReport = result.id;

            let createCellule = {
              entree: new Date(dateEntree),
              sortie: new Date(dateSortie),
              civil: civil,
              idAgent: parseInt(idAgent),
              arrestReport,
              idArrestReport: `api/arrest_reports/${result.id}`,
            };

            dispatch(add_cellule(createCellule));
            resolve(result);
          })
          .catch((e) => {
            reject(e);
          });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const edit_rapportArrestation = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await Api.put(`/arrest_reports/${id}`, data);
      let result = res.data;
      dispatch({ type: EDIT_RAPPORT_ARRESTATION, payload: result });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const delete_rapportArrestation = (id) => {
  return async (dispatch) => {
    try {
      const res = await Api.delete(`/arrest_reports/${id}`);
      dispatch({ type: DELETE_RAPPORT_ARRESTATION, payload: { id } });
    } catch (error) {
      console.log(error.message);
    }
  };
};

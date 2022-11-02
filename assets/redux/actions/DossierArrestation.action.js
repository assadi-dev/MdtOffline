import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import {
  addDateByHour,
  dateFrenchFormat,
  obtainDate,
} from "../../utils/dateFormat";
import { generateNumeroDossier, ucFirst } from "../../utils/textFormat";
import { ENCLOSE_ARREST_FOLDER } from "../types/civil.type";
import {
  ADD_DOSSIER_ARRESTATION,
  DELETE_DOSSIER_ARRESTATION,
  EDIT_DOSSIER_ARRESTATION,
} from "../types/DossierArrestation.type";
import { add_rapportArrestation } from "./RapportArrestation.action";
import { add_cellule } from "../actions/Cellule.action ";
import { sendCelluleToDiscord } from "../../Pages/Civil/Selected/SendDiscord/SendDiscord";
import { DOMAIN } from "../../constants/localStorage";
import iconSAPD from "../../ressources/img/logoSapd.png";
import { add_prison } from "./Prison.action";

export const add_dossierArrestation = (data, civilData) => {
  return async (dispatch) => {
    try {
      return new Promise((resolve, reject) => {
        Api.post("/arrest_folders", data)
          .then((res) => {
            let result = res.data;
            dispatch({ type: ADD_DOSSIER_ARRESTATION, payload: result });

            const { entreeCellule, peine } = result;
            const { idAgent, civil, agent } = data;

            let dateEntree = `${obtainDate()} ${entreeCellule}`;
            let dateSortie = addDateByHour(dateEntree, peine);
            let arrestFolder = result.id;

            let createPrison = {
              entree: new Date(dateEntree),
              sortie: new Date(dateSortie),
              civil: civil,
              idAgent: parseInt(idAgent),
              arrestFolder,
              idArrestFolder: `api/arrest_folders/${result.id}`,
            };

            dispatch(add_prison(createPrison));
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

export const enCloseArrestFolder = (id, civilData, agentData) => {
  return async (dispatch) => {
    try {
      Api.put(`/arrest_folders/${id}`, {
        isEnclose: true,
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
        dispatch({ payload: id, type: ENCLOSE_ARREST_FOLDER });
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

        dispatch(add_rapportArrestation(createArrestReaport, civilData)).then(
          (res) => {}
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

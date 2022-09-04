import { ADD_AVERTISSEMENT } from "../types/avertissements..type";
import {
  ADD_CIVIL,
  ENCLOSE_ARREST_FOLDER,
  GET_ALL_CIVIL,
  GET_ONE_CIVIL,
  GET_SEARCH_CIVIL_RESULT,
} from "../types/civil.type";
import {
  ADD_DOSSIERARRESTATION,
  ADD_DOSSIER_ARRESTATION,
} from "../types/DossierArrestation.type";
import { ADD_RAPPORT_ARRESTATION } from "../types/RapportArrestation.type";
import { ADD_TRAFFIC } from "../types/Traffic.type";

const initialState = { collection: [], selected: [], isReady: false };

const CivilReducer = (state = initialState, action) => {
  const { payload, type } = action;
  state = { ...state, isReady: false };
  switch (type) {
    case GET_ALL_CIVIL:
      return { ...state, collection: payload, isReady: true };
      break;
    case GET_SEARCH_CIVIL_RESULT:
      return { ...state, collection: payload, isReady: true };
      break;
    case GET_ONE_CIVIL:
      return { ...state, selected: payload, isReady: true };
      break;
    case ADD_CIVIL:
      return {
        ...state,
        collection: [...state.collection, payload],
        isReady: true,
      };

      break;
    case ADD_AVERTISSEMENT:
      return {
        ...state,
        selected: {
          ...state.selected,
          avertissements: [...state.selected.avertissements, payload],
        },
        isReady: true,
      };
      break;

    case ADD_TRAFFIC:
      return {
        ...state,
        selected: {
          ...state.selected,
          traffics: [...state.selected.traffics, payload],
        },
        isReady: true,
      };
      break;

    case ADD_DOSSIER_ARRESTATION:
      return {
        ...state,
        selected: {
          ...state.selected,
          dossierArrestation: [...state.selected.dossierArrestation, payload],
        },
        isReady: true,
      };
      break;
    case ADD_RAPPORT_ARRESTATION:
      return {
        ...state,
        selected: {
          ...state.selected,
          rapportArrestation: [...state.selected.rapportArrestation, payload],
        },
        isReady: true,
      };

    case ENCLOSE_ARREST_FOLDER:
      let update = state.selected.dossierArrestation.map((d) => {
        if (d.id == payload) {
          return { ...d, isEnclose: true };
        }
        return d;
      });

      return {
        ...state,
        selected: {
          ...state.selected,
          dossierArrestation: update.filter((d) => d.isEnclose === false),
        },
        isReady: true,
      };
    default:
      return state;
      break;
  }
};

export default CivilReducer;

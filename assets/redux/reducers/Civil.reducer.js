import {
  ADD_AVERTISSEMENT,
  EDIT_AVERTISSEMENT,
} from "../types/avertissements..type";
import {
  ADD_CIVIL,
  ENCLOSE_ARREST_FOLDER,
  GET_ALL_CIVIL,
  GET_ONE_CIVIL,
  GET_SEARCH_CIVIL_RESULT,
  UPLOAD_PHOTO_CIVIL,
} from "../types/civil.type";
import { ADD_CONVOCATION } from "../types/Convocation.type";
import {
  ADD_DOSSIERARRESTATION,
  ADD_DOSSIER_ARRESTATION,
  EDIT_DOSSIER_ARRESTATION,
} from "../types/DossierArrestation.type";
import {
  ADD_RAPPORT_ARRESTATION,
  EDIT_RAPPORT_ARRESTATION,
} from "../types/RapportArrestation.type";
import { ADD_TRAFFIC, EDIT_TRAFFIC } from "../types/Traffic.type";
import { ADD_CELLULE } from "../types/Cellule.type";

const initialState = {
  collection: [],
  selected: [],
  filter: [],
  isReady: false,
};

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

    case UPLOAD_PHOTO_CIVIL:
      let newStateCollection = state.collection;
      const civilIndex = newStateCollection.findIndex(
        (c) => c.id == payload.id
      );
      newStateCollection[civilIndex].photo = payload.photo;

      return {
        ...state,
        collection: newStateCollection,
        selected: { ...state.selected, photo: payload.photo },
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
    case EDIT_AVERTISSEMENT:
      let updateAvertissement = state.selected.avertissements.map(
        (avertissement) => {
          if (avertissement.id == payload.id) {
            return { ...payload };
          }
          return avertissement;
        }
      );

      return {
        ...state,
        selected: { ...state.selected, avertissements: updateAvertissement },
        isReady: true,
      };

    case ADD_TRAFFIC:
      return {
        ...state,
        selected: {
          ...state.selected,
          traffics: [...state.selected.traffics, payload],
        },
        isReady: true,
      };

    case EDIT_TRAFFIC:
      let updateTraffic = state.selected.traffics.map((traffic) => {
        if (traffic.id == payload.id) {
          return { ...payload };
        }
        return traffic;
      });

      return {
        ...state,
        selected: { ...state.selected, traffics: updateTraffic },
        isReady: true,
      };

    case ADD_RAPPORT_ARRESTATION:
      return {
        ...state,
        selected: {
          ...state.selected,
          rapportArrestation: [...state.selected.rapportArrestation, payload],
        },
        isReady: true,
      };

    case EDIT_RAPPORT_ARRESTATION:
      let updateRapportArrestation = state.selected.rapportArrestation.map(
        (rapportArrestation) => {
          if (rapportArrestation.id == payload.id) {
            return { ...payload };
          }
          return rapportArrestation;
        }
      );

      return {
        ...state,
        selected: {
          ...state.selected,
          rapportArrestation: updateRapportArrestation,
        },
        isReady: true,
      };

    case ADD_DOSSIER_ARRESTATION:
      return {
        ...state,
        selected: {
          ...state.selected,
          dossierArrestation: [...state.selected.dossierArrestation, payload],
        },
        isReady: true,
      };

    case EDIT_DOSSIER_ARRESTATION:
      let updateDossierArrestation = state.selected.dossierArrestation.map(
        (dossierArrestation) => {
          if (dossierArrestation.id == payload.id) {
            return { ...payload };
          }
          return dossierArrestation;
        }
      );

      return {
        ...state,
        selected: {
          ...state.selected,
          dossierArrestation: updateDossierArrestation,
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
          dossierArrestation: update,
        },
        isReady: true,
      };

    case ADD_CELLULE:
      return {
        ...state,
        selected: {
          ...state.selected,
          cellule: [...state.selected.cellule, payload],
        },
      };

    case ADD_CONVOCATION:
      return {
        ...state,
        selected: {
          ...state.selected,
          convocation: [...state.selected.convocation, payload],
        },
      };

    default:
      return state;
      break;
  }
};

export default CivilReducer;

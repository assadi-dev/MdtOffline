import {
  ADD_DOSSIER_ARRESTATION,
  DELETE_DOSSIER_ARRESTATION,
  GET_ALL_DOSSIER_ARRESTATION,
} from "../types/DossierArrestation.type";

const initialState = { collection: [], selected: [] };

const DossierArrestationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DOSSIER_ARRESTATION:
      return { ...state, collection: payload };

      return;
    default:
      return state;
  }
};

export default DossierArrestationReducer;

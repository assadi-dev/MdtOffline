import {
  ADD_AVERTISSEMENT,
  GET_AVERTISSEMENT_BY_CIVIL,
} from "../types/avertissements..type";

const initialState = { collection: [], selected: [], filtered: [] };

const Avertissements = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_AVERTISSEMENT_BY_CIVIL:
      return { ...state, filtered: payload };
    case ADD_AVERTISSEMENT:
      return { ...state, collection: [payload, ...state.collection] };
    default:
      return state;
      break;
  }
};

export default Avertissements;

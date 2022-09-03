import { GET_ALL_RAPPORT_ARRESTATION } from "../types/RapportArrestation.type";

const initialState = { collection: [], selected: [] };

const RapporArrestationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_RAPPORT_ARRESTATION:
      return { ...state, collection: payload };
    default:
      return state;
      break;
  }
};

export default RapporArrestationReducer;

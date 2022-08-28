import { ADD_CIVIL, GET_ALL_CIVIL, GET_ONE_CIVIL } from "../types/civil.type";

const initialState = { collection: [], selected: [], isReady: false };

const CivilReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_CIVIL:
      return { ...state, collection: payload, isReady: true };
      break;
    case GET_ONE_CIVIL:
      return { ...state, selected: payload };
      break;
    case ADD_CIVIL:
      return {
        ...state,
        collection: [payload, ...state.collection],
        isReady: true,
      };
      break;

    default:
      return state;
      break;
  }
};

export default CivilReducer;

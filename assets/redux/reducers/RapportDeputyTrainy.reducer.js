import React from "react";
import {
  ADD_RAPPORT_DEPUTY_TRAINY,
  GET_ALL_RAPPORT_DEPUTY_TRAINY,
} from "../types/RapportDeputyTrainy.type ";

const initialState = { collections: [], selected: [], isReady: false };

const RapportDeputyTrainyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_RAPPORT_DEPUTY_TRAINY:
      return { ...state, collection: payload, isReady: true };
    case ADD_RAPPORT_DEPUTY_TRAINY:
      return {
        ...state,
        collection: [payload, ...state.collections],
        isReady: true,
      };

    default:
      return state;
  }
};

export default RapportDeputyTrainyReducer;

import React from "react";
import {
  ADD_RAPPORT_INCIDENT,
  GET_ALL_RAPPORT_INCIDENT,
} from "../types/RapportIncident.type";

const initialState = { collections: [], selected: {}, isReady: false };

const RapportIncidentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_RAPPORT_INCIDENT:
      return { ...state, collections: payload, isReady: true };

    case ADD_RAPPORT_INCIDENT:
      return {
        ...state,
        collections: [payload, ...state.collections],
        isReady: true,
      };

    default:
      return state;
  }
};

export default RapportIncidentReducer;

import React from "react";
import {
  GET_ALL_AGENTS,
  GET_ALL_ROOKIES,
  GET_SINGLEL_AGENT,
} from "../types/Agent.types";

const initialState = {
  collections: [],
  selected: [],
  isReady: false,
};

const AgentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_AGENTS:
      return { ...state, collections: payload, isReady: true };
    case GET_ALL_ROOKIES:
      return { ...state, collections: payload, isReady: true };
    case GET_SINGLEL_AGENT:
      return { ...state, selected: payload, isReady: true };

    default:
      return state;
  }
};

export default AgentsReducer;

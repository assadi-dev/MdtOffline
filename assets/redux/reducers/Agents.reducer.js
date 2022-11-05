import React from "react";
import {
  EDIT_AGENT,
  GET_ALL_AGENTS,
  GET_ALL_ROOKIES,
  GET_SINGLEL_AGENT,
  UPDATE_PAID_PRISE_DE_SERVICES,
} from "../types/Agent.types";

const initialState = {
  collections: [],
  filtered: [],
  selected: [],
  isReady: false,
};

const AgentsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_AGENTS:
      return { ...state, collections: payload, isReady: true };
    case GET_ALL_ROOKIES:
      return { ...state, filtered: payload, isReady: true };
    case GET_SINGLEL_AGENT:
      return { ...state, selected: payload, isReady: true };
    case EDIT_AGENT:
      let updateAgent = state.collections.map((agent) => {
        if (agent.id == payload.id) {
          return { ...payload };
        }
        return agent;
      });

      return { ...state, collections: updateAgent, isReady: true };

    case UPDATE_PAID_PRISE_DE_SERVICES:
      const { idAgent, id, isPaid } = payload;

      updateAgent = state.collections.map((agent) => {
        if (agent.id == idAgent) {
          return {
            ...agent,
            priseDeServices: agent.priseDeServices.map((s) => {
              if (s.id == id) {
                return { ...s, isPaid };
              }
              return s;
            }),
          };
        }
        return agent;
      });

      return { ...state, collections: updateAgent, isReady: true };

    default:
      return state;
  }
};

export default AgentsReducer;

import React from "react";

import { GET_ALL_PRISON, GET_SINGLE_PRISON } from "../types/Prison.type";

const initialState = { collection: [], selected: [], isReady: false };
const PrisonReducer = (state = initialState, action) => {
  const { type, payload } = action;
  state = { ...state, isReady: false };
  switch (type) {
    case GET_ALL_PRISON:
      return { ...state, collection: payload, isReady: true };
      return;

    case GET_SINGLE_PRISON:
      return { ...state, selected: payload, isReady: true };
      return;

      break;

    default:
      return state;
      break;
  }
};

export default PrisonReducer;

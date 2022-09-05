import React from "react";
import {
  GET_ALL_CONVOCATION,
  GET_SINGLE_CONVOCATION,
} from "../types/Convocation.type";

const initialState = { collection: [], selected: [], isReady: false };
const ConvocationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  state = { ...state, isReady: false };
  switch (type) {
    case GET_ALL_CONVOCATION:
      return { ...state, collection: payload, isReady: true };
      return;

    case GET_SINGLE_CONVOCATION:
      return { ...state, selected: payload, isReady: true };
      return;

      break;

    default:
      return state;
      break;
  }
};

export default ConvocationReducer;

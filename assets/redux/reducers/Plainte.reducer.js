import React from "react";
import { ADD_PLAINTE, GET_ALL_PLAINTE } from "../types/Plainte.type";

const initialState = { collection: [], selected: [], isReady: false };

const PlainteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PLAINTE:
      return { ...state, collection: payload, isReady: true };
    case ADD_PLAINTE:
      return {
        ...state,
        collection: [payload, ...state.collection],
        isReady: true,
      };

    default:
      return state;
  }
};

export default PlainteReducer;

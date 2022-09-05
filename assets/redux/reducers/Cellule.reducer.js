import React from "react";
import { GET_ALL_CELLULE, GET_SINGLE_CELLULE } from "../types/Cellule.type";

const initialState = { collection: [], selected: [], isReady: false };
const CelluleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  state = { ...state, isReady: false };
  switch (type) {
    case GET_ALL_CELLULE:
      return { ...state, collection: payload, isReady: true };
      return;

    case GET_SINGLE_CELLULE:
      return { ...state, selected: payload, isReady: true };
      return;

      break;

    default:
      return state;
      break;
  }
};

export default CelluleReducer;

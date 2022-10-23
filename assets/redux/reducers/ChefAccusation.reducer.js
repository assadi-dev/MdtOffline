import React from "react";
import {
  GET_ALL_CHEF_ACCUSATIONS,
  GET_SINGLE_CHEF_ACCUSATIONS,
  GET_FILTERED_CHEF_ACCUSATIONS,
  EDIT_CHEF_ACCUSATIONS,
} from "../types/ChefAccusation.type";

const initialState = {
  collections: [],
  selected: [],
  filtered: [],
  isReady: false,
};

const ChefAccusationReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_CHEF_ACCUSATIONS:
      return { ...state, collections: payload, isReady: true };

    case GET_SINGLE_CHEF_ACCUSATIONS:
      return { ...state, selected: payload, isReady: true };

    case GET_FILTERED_CHEF_ACCUSATIONS:
      return { ...state, filtered: payload, isReady: true };

    default:
      return state;
  }
};

export default ChefAccusationReducer;

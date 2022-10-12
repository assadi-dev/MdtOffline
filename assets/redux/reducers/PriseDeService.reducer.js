import React from "react";
import {
  ADD_PRISE_DE_SERVICES,
  DELETE_PRISE_DE_SERVICES,
  GET_ALL_PRISE_DE_SERVICES,
} from "../types/PriseDeService.type";

const initialState = { collections: [], selected: {}, isReady: false };
const PriseDeServiceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRISE_DE_SERVICES:
      return { ...state, collections: payload, isReady: true };
    case ADD_PRISE_DE_SERVICES:
      return {
        ...state,
        collections: [payload, ...state.collections],
        isReady: true,
      };

    case DELETE_PRISE_DE_SERVICES:
      let serviceItemRemoved = state.collections.filter(
        (service) => service.id != payload.id
      );

      return { ...state, collections: serviceItemRemoved, isReady: true };

    default:
      return state;
  }
};

export default PriseDeServiceReducer;

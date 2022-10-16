import React from "react";
import {
  ADD_PRISE_DE_SERVICES,
  DELETE_PRISE_DE_SERVICES,
  EDIT_PRISE_DE_SERVICES,
  GET_ALL_PRISE_DE_SERVICES,
  GET_PRISE_DE_SERVICES_BY_WEEK,
  GET_SINGLE_PRISE_DE_SERVICES,
  GET_USER_LAST_ACTIVE_SERVICE,
  GET_USER_PRISE_DE_SERVICES_BY_WEEK,
} from "../types/PriseDeService.type";

const initialState = { collections: [], selected: {}, isReady: false };
const PriseDeServiceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRISE_DE_SERVICES:
      return { ...state, collections: payload, isReady: true };
    case GET_PRISE_DE_SERVICES_BY_WEEK:
      return { ...state, collections: payload, isReady: true };
    case GET_USER_PRISE_DE_SERVICES_BY_WEEK:
      return {
        ...state,
        collections: payload,
        isReady: true,
      };
    case GET_SINGLE_PRISE_DE_SERVICES:
      return { ...state, selected: payload, isReady: true };

    case GET_USER_LAST_ACTIVE_SERVICE:
      return { ...state, selected: payload, isReady: true };

    case ADD_PRISE_DE_SERVICES:
      return {
        ...state,
        collections: [payload, ...state.collections],
        isReady: true,
      };

    case EDIT_PRISE_DE_SERVICES:
      let updateCollection = state.collections.map((service) => {
        if (service.id == payload.id) {
          return payload;
        }
        return service;
      });

      return {
        ...state,
        collections: updateCollection,
        selected: payload,
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

import React from "react";
import { GET_ALL_GRADES } from "../types/Grades.type";
const initialState = { collections: [], selected: [], isReady: false };

const GradesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_GRADES:
      return { ...state, collections: payload, isReady: true };

    default:
      return state;
  }
};

export default GradesReducer;

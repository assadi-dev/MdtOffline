import React from "react";
import {
  ADD_GRADE,
  DELETE_GRADE,
  EDIT_GRADE,
  GET_ALL_GRADES,
} from "../types/Grades.type";
const initialState = {
  collections: [],
  selected: [],
  filtered: [],
  isReady: false,
};

const GradesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_GRADES:
      return { ...state, collections: payload, isReady: true };

    case ADD_GRADE:
      return {
        ...state,
        collections: [...state.collections, payload],
        isReady: true,
      };

    case EDIT_GRADE:
      let updateGradeCollection = state.collections;
      updateGradeCollection = updateGradeCollection.map((grade) => {
        if (grade.id === payload.id) {
          return { ...payload };
        }
        return grade;
      });

      return { ...state, collections: updateGradeCollection, isReady: true };

    case DELETE_GRADE:
      let removeGradeCollection = state.collections;
      removeGradeCollection = removeGradeCollection.filter(
        (grade) => grade.id != payload.id
      );
      return { ...state, collections: removeGradeCollection, isReady: true };
    default:
      return state;
  }
};

export default GradesReducer;

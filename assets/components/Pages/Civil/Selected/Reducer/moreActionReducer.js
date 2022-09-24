import React from "react";
const EDIT_AVERTISSEMENT = "EDIT_AVERTISSEMENT";
const DELETE_AVERTISSEMENT = "DELETE_AVERTISSEMENT";

const moreActionReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_AVERTISSEMENT:
      return {
        ...state,
        id: payload.id,
        action: "edit",
        isOpen: payload.isOpen,
      };

    case DELETE_AVERTISSEMENT:
      return { ...state, id: payload.id, action: "delete" };

    default:
      return state;
      break;
  }
};

export default moreActionReducer;

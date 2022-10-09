import React from "react";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

const ModalStateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen, view: payload.view };

    case OPEN_MODAL:
      return { ...state, isOpen: true, view: payload.view };

    case CLOSE_MODAL:
      return { ...state, isOpen: false, view: "" };

    default:
      break;
  }
};

export default ModalStateReducer;

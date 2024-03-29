import React from "react";

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

export const ModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        view: payload.view,
        id: payload.id || "",
      };

    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        view: payload.view,
        id: payload.id || "",
      };

      break;

    default:
      return state;
      break;
  }
};

export default ModalReducer;

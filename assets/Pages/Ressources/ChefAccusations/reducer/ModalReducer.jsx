import React from "react";

export const ModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOOGLE_MODAL":
      return {
        ...state,
        view: payload.view,
        isOpen: !state.isOpen,
        chefAccusation: payload.chefAccusation,
      };
      break;

    default:
      return state;
      break;
  }
};

export default ModalReducer;

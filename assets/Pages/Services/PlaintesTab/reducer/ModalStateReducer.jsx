import React from "react";

const ModalStateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOOGLE_MODAL":
      return {
        ...state,
        view: payload.view,
        data: payload.data,
        isOpen: !state.isOpen,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isOpen: false,
      };

    default:
      break;
  }
};

export default ModalStateReducer;

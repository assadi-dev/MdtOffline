import React from "react";

const ModalStateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_AGENT":
      return { ...state, view: "edit", isOpen: !state.isOpen, params: payload };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false, params: [] };

    case "ERROR":
      return { ...state, error: payload.message };

    default:
      return state;
  }
};

export default ModalStateReducer;

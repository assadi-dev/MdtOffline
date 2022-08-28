import React from "react";

export const ENCODE_CIVIL = "ENCODE_CIVIL";

export const EncodeCivilReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ENCODE_CIVIL:
      return { ...payload, process: "sending" };

      break;

    default:
      return state;
      break;
  }
};

export default ModalReducer;

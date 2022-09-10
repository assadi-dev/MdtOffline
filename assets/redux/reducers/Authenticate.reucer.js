import React from "react";
import { LOGIN, LOGOUT } from "../types/Authenticate.type";

const initialState = { role: "", id: "", isLoggedIn: false };
const AuthenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, id: payload.id, role: payload.role, isLoggedIn: true };
      break;
    case LOGOUT:
      return {
        ...state,
        id: "",
        role: "",
        isLoggedIn: false,
      };
    default:
      return state;
      break;
  }
};

export default AuthenticateReducer;

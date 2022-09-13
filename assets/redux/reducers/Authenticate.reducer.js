import React from "react";
import { GET_OWNER, LOGIN, LOGOUT } from "../types/Authenticate.type";

const initialState = { role: "", id: "", username: "", isLoggedIn: false };
const AuthenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        id: payload.id,
        role: payload.role,
        isLoggedIn: true,
      };
      break;
    case LOGOUT:
      return {
        ...state,
        id: "",
        role: "",
        isLoggedIn: false,
      };
    case GET_OWNER:
      return {
        ...state,
        username: payload.username,
      };
    default:
      return state;
      break;
  }
};

export default AuthenticateReducer;

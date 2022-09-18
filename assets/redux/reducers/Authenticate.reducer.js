import React from "react";
import {
  CHANGE_PHOTO_OWNER,
  EDIT_OWNER,
  ERROR_OWNER,
  GET_OWNER,
  LOGIN,
  LOGOUT,
} from "../types/Authenticate.type";

const initialState = {
  role: "",
  id: "",
  username: "",
  matricule: "",
  grade: "",
  token: "",
  isLoggedIn: false,
  error: "",
};
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
        ...payload,
        isLoggedIn: true,
      };
    case EDIT_OWNER:
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
      };
    case CHANGE_PHOTO_OWNER:
      return {
        ...state,
        photo: payload,
      };
    case ERROR_OWNER:
      return { ...state, error: payload.error };
    default:
      return state;
      break;
  }
};

export default AuthenticateReducer;

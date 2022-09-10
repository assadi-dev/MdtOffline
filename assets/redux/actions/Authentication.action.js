import { LOGIN, LOGOUT } from "../types/Authenticate.type";

export const userLoged = (id, role) => {
  return async (dispatch) => {
    try {
      let data = { id, role };
      dispatch({ type: LOGIN, payload: data });
    } catch (error) {}
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT });
    } catch (error) {}
  };
};

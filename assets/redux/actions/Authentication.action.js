import { GET_OWNER, LOGIN, LOGOUT } from "../types/Authenticate.type";
import Api from "../../service/Api/Api";

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

/* export const register = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT });
    } catch (error) {}
  };
}; */

export const get_owner = (id, token) => {
  return async (dispatch) => {
    try {
      Api.get(`/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        let role = res.data.roles.join("-");
        let id = res.data.id;
        let username = res.data.username;
        let photo = res.data.agent.photo;
        let matricule = res.data.agent.matricule
          ? res.data.agent.matricule
          : "N/A";
        let grade = res.data.agent.grade;

        dispatch({
          type: GET_OWNER,
          payload: { username, photo, matricule, grade, role, id, token },
        });
      });
    } catch (error) {}
  };
};

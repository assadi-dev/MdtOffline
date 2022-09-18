import {
  EDIT_OWNER,
  ERROR_OWNER,
  GET_OWNER,
  LOGIN,
  LOGOUT,
} from "../types/Authenticate.type";
import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";

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
        let telephone = res.data.agent.telephone;
        let idAgent = res.data.agent.id;
        let createdAt = res.data.createdAt;
        let nameAgent = res.data.agent.name;

        dispatch({
          type: GET_OWNER,
          payload: {
            username,
            photo,
            matricule,
            grade,
            telephone,
            role,
            id,
            token,
            idAgent,
            nameAgent,
            createdAt,
          },
        });
      });
    } catch (error) {}
  };
};

export const editAccount = (id, token, data) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      const { idAgent, matricule, telephone, username } = data;
      try {
        Api.put("/agents/" + idAgent, {
          matricule,
          telephone,
          name: username,
        })
          .then((res) => {
            const data = res.data;
            const { name, matricule, telephone } = data;
            dispatch({
              type: EDIT_OWNER,
              payload: { name, matricule, telephone },
            });
            resolve(res.data);
            Api.put("/users/" + id, { username }, headers).then((res) => {
              const data = res.data;
              const { username } = data;
              dispatch({
                type: EDIT_OWNER,
                payload: { username },
              });
            });
          })
          .catch((err) => {
            reject(err);
            let errorData = err.response.data.violations;

            if (errorData) {
              dispatch({
                type: ERROR_OWNER,
                payload: { error: errorData[0].message },
              });
            }
          });
      } catch (error) {
        console.log(error);
      }
    });
  };
};

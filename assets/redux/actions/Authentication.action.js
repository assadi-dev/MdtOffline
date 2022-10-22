import {
  CHANGE_PHOTO_OWNER,
  EDIT_OWNER,
  ERROR_OWNER,
  GET_OWNER,
  LOGIN,
  LOGOUT,
} from "../types/Authenticate.type";
import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";
import axios from "axios";

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
      Api.get(`/users/${id}`).then((res) => {
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

            idAgent,
            nameAgent,
            createdAt,
          },
        });
      });
    } catch (error) {}
  };
};

export const editAccount = (id, data) => {
  return async (dispatch) => {
    const { idAgent, matricule, telephone, username } = data;

    const endpoints = [
      {
        url: "/agents/" + idAgent,
        body: {
          matricule,
          telephone,
          name: username,
        },
      },
      { url: "/users/" + id, body: { username } },
    ];

    return new Promise((resolve, reject) => {
      try {
        Promise.all(
          endpoints.map((endpoint) => Api.put(endpoint.url, endpoint.body))
        )
          .then(([{ data: agent }, { data: user }]) => {
            const { name, matricule, telephone } = agent;
            const { username } = user;
            if (agent) {
              dispatch({
                type: EDIT_OWNER,
                payload: { name, matricule, telephone },
              });

              dispatch({
                type: EDIT_OWNER,
                payload: { username },
              });
              resolve(agent);
            }
          })
          .catch((err) => {
            reject(err);
          });
      } catch (error) {
        if (error.response) {
          let errorData = err.response.data.violations;
          dispatch({
            type: ERROR_OWNER,
            payload: { error: errorData[0].message },
          });
        }
      }
    });
  };
};

export const UploadPhotoOwner = (idAgent, data) => {
  return async (dispatch) => {
    try {
      Api.post(`/agents/${idAgent}/photo`, data).then((res) => {
        const { photo } = res.data;
        dispatch({ type: CHANGE_PHOTO_OWNER, payload: photo });
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

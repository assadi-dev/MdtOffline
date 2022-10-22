import Api from "../../service/Api/Api";
import {
  EDIT_AGENT,
  GET_ALL_AGENTS,
  GET_ALL_ROOKIES,
  GET_SINGLEL_AGENT,
} from "../types/Agent.types";

export const get_allAgent = () => {
  return async (dispatch) => {
    try {
      Api.get("agents").then((res) => {
        let data = res.data;
        dispatch({ type: GET_ALL_AGENTS, payload: data });
      });
    } catch (error) {}
  };
};

export const get_singleAgent = (agentId) => {
  return async (dispatch) => {
    try {
      Api.get(`agents/${agentId}`).then((res) => {
        let data = res.data;
        dispatch({ type: GET_SINGLEL_AGENT, payload: data });
      });
    } catch (error) {}
  };
};

export const get_allRookie = () => {
  return async (dispatch) => {
    try {
      Api.get("agents", { params: { "grade.nom": "Rookie" } }).then((res) => {
        let data = res.data;
        dispatch({ type: GET_ALL_ROOKIES, payload: data });
      });
    } catch (error) {}
  };
};

export const edit_agent = (id, data) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        Api.put(`agents/${id}`, data)
          .then((res) => {
            let data = res.data;
            dispatch({ type: EDIT_AGENT, payload: data });
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } catch (error) {
        console.log(error);
      }
    });
  };
};

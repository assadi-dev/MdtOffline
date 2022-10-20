import Api from "../../service/Api/Api";
import {
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
      Api.get("agents", { params: { grade: "Rookie" } }).then((res) => {
        let data = res.data;
        dispatch({ type: GET_ALL_ROOKIES, payload: data });
      });
    } catch (error) {}
  };
};

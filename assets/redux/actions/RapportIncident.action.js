import Api from "../../service/Api/Api";
import {
  ADD_RAPPORT_INCIDENT,
  GET_ALL_RAPPORT_INCIDENT,
} from "../types/RapportIncident.type";

export const get_AllRapportIncident = () => {
  return async (dispatch) => {
    try {
      Api.get(`/rapport_incidents`).then((res) => {
        let data = res.data;
        dispatch({ type: GET_ALL_RAPPORT_INCIDENT, payload: data });
      });
    } catch (error) {}
  };
};

export const add_rapportIncident = (data) => {
  return async (dispatch) => {
    try {
      Api.post(`/rapport_incidents`, data).then((res) => {
        let data = res.data;
        dispatch({ type: ADD_RAPPORT_INCIDENT, payload: data });
      });
    } catch (error) {}
  };
};

import Api from "../../service/Api/Api";
import {
  ADD_RAPPORT_DEPUTY_TRAINY,
  GET_ALL_RAPPORT_DEPUTY_TRAINY,
} from "../types/RapportDeputyTrainy.type ";

export const get_allRapportDeputyTrainy = () => {
  return async (dispatch) => {
    try {
      Api.get("/rapport_deputy_trainees").then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_RAPPORT_DEPUTY_TRAINY, payload: data });
      });
    } catch (error) {}
  };
};

export const add_rapportDeputyTrainy = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/rapport_deputy_trainees", data).then((res) => {
        const data = res.data;
        dispatch({ type: ADD_RAPPORT_DEPUTY_TRAINY, payload: data });
      });
    } catch (error) {}
  };
};

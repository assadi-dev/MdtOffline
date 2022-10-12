import Api from "../../service/Api/Api";
import {
  ADD_PRISE_DE_SERVICES,
  GET_ALL_PRISE_DE_SERVICES,
  GET_PRISE_DE_SERVICES_BY_WEEK,
} from "../types/PriseDeService.type";

export const get_allPriseServices = () => {
  return async (dispatch) => {
    try {
      Api.get("/prise_de_services").then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_PRISE_DE_SERVICES, payload: data });
      });
    } catch (error) {}
  };
};

export const get_onePriseService = () => {};

export const get_priseServiceByWeek = (week) => {
  return async (dispatch) => {
    try {
      Api.get("/prise_de_services", { params: { week } }).then((res) => {
        let data = res.data;
        dispatch({ type: GET_PRISE_DE_SERVICES_BY_WEEK, payload: data });
      });
    } catch (error) {}
  };
};

export const add_priseServices = (data) => {
  return async (dispatch) => {
    try {
      Api.post("/prise_de_services", data).then((res) => {
        const data = res.data;
        dispatch({ type: ADD_PRISE_DE_SERVICES, payload: data });
      });
    } catch (error) {}
  };
};

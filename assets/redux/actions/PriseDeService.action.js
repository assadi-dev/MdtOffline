import Api from "../../service/Api/Api";
import { UPDATE_PAID_PRISE_DE_SERVICES } from "../types/Agent.types";
import {
  ADD_PRISE_DE_SERVICES,
  DELETE_PRISE_DE_SERVICES,
  EDIT_PRISE_DE_SERVICES,
  GET_ALL_PRISE_DE_SERVICES,
  GET_PRISE_DE_SERVICES_BY_WEEK,
  GET_USER_LAST_ACTIVE_SERVICE,
  GET_USER_PRISE_DE_SERVICES_BY_WEEK,
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
      Api.get("/prise_de_services", {
        params: { week, "order[createdAt]": "desc" },
      }).then((res) => {
        let data = res.data;
        dispatch({ type: GET_PRISE_DE_SERVICES_BY_WEEK, payload: data });
      });
    } catch (error) {}
  };
};

export const get_userPriseServiceByWeek = (agent, week) => {
  return async (dispatch) => {
    try {
      Api.get("/prise_de_services", {
        params: { week, agent, "order[createdAt]": "desc" },
      }).then((res) => {
        let data = res.data;
        dispatch({ type: GET_USER_PRISE_DE_SERVICES_BY_WEEK, payload: data });
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

export const get_lastActiveService = (agent) => {
  return async (dispatch) => {
    try {
      Api.get("/prise_de_services", {
        params: { agent, "order[createdAt]": "desc", isActive: false },
      }).then((res) => {
        let data = res.data[0];
        dispatch({ type: GET_USER_LAST_ACTIVE_SERVICE, payload: data });
      });
    } catch (error) {}
  };
};

export const edit_priseServices = (id, data) => {
  return async (dispatch) => {
    try {
      Api.put(`/prise_de_services/${id}`, data).then((res) => {
        const data = res.data;
        dispatch({ type: EDIT_PRISE_DE_SERVICES, payload: data });
      });
    } catch (error) {}
  };
};

export const delete_priseServices = (id) => {
  return async (dispatch) => {
    try {
      Api.delete(`/prise_de_services/${id}`).then(() => {
        dispatch({ type: DELETE_PRISE_DE_SERVICES, payload: { id } });
      });
    } catch (error) {}
  };
};

export const updateIsPaidService = (servicesOfWeek) => {
  return async (dispatch) => {
    try {
      let idSevices = servicesOfWeek.priseServiceByWeek.map(
        (services) => services.id
      );

      const { idAgent, paidValue } = servicesOfWeek;

      if (idSevices.length > 0) {
        Promise.all(
          idSevices.map((id) => {
            dispatch({
              type: UPDATE_PAID_PRISE_DE_SERVICES,
              payload: { idAgent, id, isPaid: paidValue },
            });
            Api.put(`/prise_de_services/${id}`, {
              isPaid: paidValue,
            }).then((res) => {});
          })
        );
      }
    } catch (error) {}
  };
};

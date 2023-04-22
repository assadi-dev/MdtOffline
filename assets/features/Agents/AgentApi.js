import Api from "../../service/Api/Api";
import { updatePaidUser } from "./Agent.slice";

export const fetchAllAgents = (signal) => {
  return Api.get("/agents", { signal });
};

export const fetchAgentByName = (searchTerm) => {
  return Api.get("/agents/search", {
    params: {
      searchTerm,
    },
  });
};

export const fetch_one = (idAgent, signal) => {
  return Api.get(`/agents/${idAgent}`, { signal });
};

export const fetch_allRookie = () => {
  return Api.get("/agents", { params: { "grade.nom": "Rookie" } });
};

export const edit_agent = (id, data) => {
  return Api.put(`/agents/${id}`, data);
};

export const add_agent = (data) => {
  return Api.post(`/agents`, data);
};

export const updateisPaidService = (dispatch, servicesOfWeek) => {
  let idSevices = servicesOfWeek.priseServiceByWeek.map(
    (services) => services.id
  );
  const { idAgent, paidValue } = servicesOfWeek;
  if (idSevices.length > 0) {
    Promise.all(
      idSevices.map((id) => {
        const payload = { idAgent, id, isPaid: paidValue };
        dispatch(updatePaidUser(payload));
        Api.put(`/prise_de_services/${id}`, {
          isPaid: paidValue,
        });
      })
    );
  }
};

export const uploadPhotoAgent = (idAgent, data) => {
  return Api.post(`/agents/${idAgent}/photo`, data);
};

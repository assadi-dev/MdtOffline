import Api from "../../service/Api/Api";

export const fetchAllAgents = (signal) => {
  return Api.get("agents", { signal });
};

export const fetch_one = (idAgent, signal) => {
  return Api.get(`agents/${idAgent}`, { signal });
};

export const fetch_allRookie = (signal) => {
  return Api.get("agents", { params: { "grade.nom": "Rookie" }, signal });
};

export const edit_agent = (id, data) => {
  return Api.put(`agents/${id}`, data);
};

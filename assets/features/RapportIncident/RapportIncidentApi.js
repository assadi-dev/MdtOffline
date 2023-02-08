import Api from "../../service/Api/Api";

export const fetchAllRapportIncident = () => {
  return Api.get(`/rapport_incidents`);
};

export const fetchOneRapportIncident = (id) => {
  return Api.get(`/rapport_incidents/${id}`);
};

export const add_rapportIncident = (data) => {
  return Api.post(`/rapport_incidents`);
};

export const edit_rapportIncident = (id, data) => {
  return Api.put(`/rapport_incidents/${id}`);
};

export const delete_rapportIncident = (id) => {
  return Api.delete(`/rapport_incidents/${id}`);
};

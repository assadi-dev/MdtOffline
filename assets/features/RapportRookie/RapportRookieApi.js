import Api from "../../service/Api/Api";

export const fetchAllRapportRookie = () => {
  return Api.get("/rapport_deputy_trainees");
};

export const fetchOneRapportRookie = (id) => {
  return Api.get(`/rapport_deputy_trainees/${id}`);
};

export const add_rapportRookie = (data) => {
  return Api.post("/rapport_deputy_trainees", data);
};

export const edit_rapportRookie = (id, data) => {
  return Api.put(`/rapport_deputy_trainees/${id}`, data);
};
export const delete_rapportRookie = (id) => {
  return Api.delete(`/rapport_deputy_trainees/${id}`);
};

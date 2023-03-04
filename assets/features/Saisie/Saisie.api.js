import Api from "../../service/Api/Api";

export const fetchAllSaisies = () => {
  return Api.get("/saisies");
};

export const fetchOneSaisie = (id) => {
  return Api.get(`/saisies/${id}`);
};

export const add_saisie = (data) => {
  return Api.post("/saisies", data);
};

export const edit_saisie = (id, data) => {
  return Api.put(`/saisies/${id}`, data);
};

export const delete_saisie = (id) => {
  return Api.delete(`/saisies/${id}`);
};

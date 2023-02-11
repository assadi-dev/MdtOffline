import Api from "../../service/Api/Api";

export const fetchAllPlaintes = () => {
  return Api.get("/plaintes");
};

export const fetchOnePlaintes = (id) => {
  return Api.get(`/plaintes/${id}`);
};

export const add_plaintes = (data) => {
  return Api.post(`/plaintes`, data);
};

export const update_plaintes = (id, data) => {
  return Api.put(`/plaintes/${id}`, data);
};

export const delete_plaintes = (id) => {
  return Api.delete(`/plaintes/${id}`);
};

import Api from "../../service/Api/Api";

//Avertissement
export const add_Avertissement = (data) => {
  return Api.post("/avertissements", data);
};
export const edit_Avertissement = (id, data) => {
  return Api.put(`/avertissements/${id}`, data);
};

export const delete_avertissement = (id) => {
  return Api.delete(`/avertissements/${id}`);
};

import Api from "../../service/Api/Api";

export const add_dossierArrestation = (data) => {
  return Api.post("/arrest_folders", data);
};

export const edit_dossierArrestation = (id, data) => {
  return Api.put(`/arrest_folders/${id}`, data);
};

export const delete_dossierArrestation = (id) => {
  return Api.delete(`/arrest_folders/${id}`);
};

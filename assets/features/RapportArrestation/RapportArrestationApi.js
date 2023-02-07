import Api from "../../service/Api/Api";

//RAPPORT D'ARRESTATION

export const add_rapportArrestation = (data) => {
  return Api.post("/arrest_reports", data);
};

export const edit_rapportArrestation = (id, data) => {
  return Api.put(`/arrest_reports/${id}`, data);
};

export const delete_rapportArrestation = (id) => {
  return Api.delete(`/arrest_reports/${id}`);
};

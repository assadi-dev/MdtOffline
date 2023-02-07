import Api from "../../service/Api/Api";
//Traffic
export const add_traffic = (data) => {
  return Api.post("/traffic", data);
};
export const edit_traffic = (id, data) => {
  return Api.put(`/traffic/${id}`, data);
};
export const delete_traffic = (id) => {
  return Api.delete(`/traffic/${id}`);
};

import Api from "../../service/Api/Api";

export const fetAllForgottenPassword = () => {
  return Api.get("/forgotten_passwords");
};

export const add_ForgottenPassword = (data) => {
  return Api.post("/forgotten_passwords", data);
};

export const edit_ForgottenPassword = (id, data) => {
  return Api.get(`/forgotten_passwords/${id}`, data);
};

export const delete_ForgottenPassword = (id) => {
  return Api.delete(`/forgotten_passwords/${id}`);
};

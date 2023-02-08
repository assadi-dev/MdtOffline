import Api from "../../service/Api/Api";

export const get_allUsers = (signal) => {
  return Api.get("/users", { signal });
};

export const get_singleUser = (id, signal) => {
  return Api.get(`/users/${id}`, { signal });
};

export const validation_user = (id, data) => {
  return Api.put(`/users/${id}`, data);
};

export const edit_user = (id, data) => {
  return Api.put(`/users/${id}`, data);
};

export const delete_user = (id) => {
  return Api.delete(`/users/${id}`);
};

/* export const changepassword = () => {
  
} */

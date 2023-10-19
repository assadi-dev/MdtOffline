import Api from "../../service/Api/Api";

export const get_allChefAccusations = (signal) => {
  return Api.get(`/chef_accusations`, { signal: signal });
};

export const get_filteredChefAccusations = (params) => {
  return Api.get(`/chef_accusations`, { params: { ...params } });
};

export const edit_chefAccusations = (id, data) => {
  return Api.put(`/chef_accusations/${id}`, data);
};
export const delete_chefAccusations = (id) => {
  return Api.delete(`/chef_accusations/${id}`);
};
export const create_chefAccusations = (data) => {
  return Api.post(`/chef_accusations`, data);
};

import Api from "../../service/Api/Api";

export const get_allChefAccusations = (signal) => {
  return Api.get(`/chef_accusations`, { signal: signal });
};

export const get_filteredChefAccusations = (params) => {
  return Api.get(`/chef_accusations`, { params: { ...params } });
};

export const edit_allChefAccusations = (id, data) => {
  return Api.put(`/chef_accusations/${id}`, data);
};

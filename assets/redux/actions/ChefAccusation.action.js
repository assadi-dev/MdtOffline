import Api from "../../service/Api/Api";
import { GET_ALL_CHEF_ACCUSATIONS } from "../types/ChefAccusation.type";

export const get_allChefAccusations = () => {
  return async (dispatch) => {
    try {
      Api.get(`/chef_accusations`).then((res) => {
        let data = res.data;
        dispatch({ type: GET_ALL_CHEF_ACCUSATIONS, payload: data });
      });
    } catch (error) {}
  };
};

export const get_filltedChefAccusations = (params) => {
  return async (dispatch) => {
    try {
      Api.get(`/chef_accusations`, { params: { ...params } });
    } catch (error) {}
  };
};

export const edit_allChefAccusations = (id, data) => {
  return async (dispatch) => {
    try {
      Api.put(`/chef_accusations/${id}`, data);
    } catch (error) {}
  };
};

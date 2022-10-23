import Api from "../../service/Api/Api";
import { GET_ALL_CHEF_ACCUSATIONS } from "../types/ChefAccusation.type";

export const get_allChefAccusations = () => {
  return async (dispatch) => {
    try {
      Api.get(`/chef_acusations`, { params: { ...params } }).then((res) => {
        const data = res.data;
        dispatch({ type: GET_ALL_CHEF_ACCUSATIONS, payload: data });
      });
    } catch (error) {}
  };
};

export const get_filltedChefAccusations = (params) => {
  return async (dispatch) => {
    try {
      Api.get(`/chef_acusations`, { params: { ...params } });
    } catch (error) {}
  };
};

export const edit_allChefAccusations = (id, data) => {
  return async (dispatch) => {
    try {
      Api.put(`/chef_acusations/${id}`, data);
    } catch (error) {}
  };
};

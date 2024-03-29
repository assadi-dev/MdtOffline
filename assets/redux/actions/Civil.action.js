import {
  ADD_CIVIL,
  EDIT_CIVIL,
  ENCLOSE_ARREST_FOLDER,
  GET_ALL_CIVIL,
  GET_ONE_CIVIL,
  GET_SEARCH_CIVIL_RESULT,
  SEARCH_CIVIL,
  UPLOAD_PHOTO_CIVIL,
} from "../types/civil.type";
import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";

export const getAllCivil = () => {
  return async (dispatch) => {
    try {
      Api.get("/civils", {}).then((res) => {
        dispatch({ payload: res.data, type: GET_ALL_CIVIL });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchCivil = (searchTerm) => {
  return async (dispatch) => {
    try {
      Api.get("/civils/search", {
        params: {
          searchTerm: searchTerm,
        },
      }).then((res) => {
        dispatch({ payload: res.data, type: GET_SEARCH_CIVIL_RESULT });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getOneCivil = (id) => {
  return async (dispatch) => {
    try {
      Api.get("/civils/" + id).then((res) => {
        let data = res.data;
        dispatch({ payload: data, type: GET_ONE_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addCivil = (data) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        Api.post("/civils", data).then((res) => {
          let data = res.data;
          dispatch({ payload: data, type: ADD_CIVIL });
          resolve(res.data);
        });
      } catch (error) {
        reject(error.message);
        console.log(error.message);
      }
    });
  };
};

export const editCivil = (id, data) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        Api.put(`/civils/${id}`, data).then((res) => {
          let data = res.data;
          dispatch({ payload: data, type: EDIT_CIVIL });
          resolve(res.data);
        });
      } catch (error) {
        reject(error.message);
        console.log(error.message);
      }
    });
  };
};

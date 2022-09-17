import {
  ADD_CIVIL,
  ENCLOSE_ARREST_FOLDER,
  GET_ALL_CIVIL,
  GET_ONE_CIVIL,
  GET_SEARCH_CIVIL_RESULT,
  SEARCH_CIVIL,
  UPLOAD_PHOTO_CIVIL,
} from "../types/civil.type";
import Api from "../../service/Api/Api";
import { setHeader } from "../../service/Api/options";

let getTokenStorage = localStorage.getItem("mdtOfflineToken-999");

export const getAllCivil = (token) => {
  return async (dispatch) => {
    try {
      Api.get("/civils", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        dispatch({ payload: res.data, type: GET_ALL_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchCivil = (searchTerm, token) => {
  return async (dispatch) => {
    try {
      Api.get("/civils/search", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

export const getOneCivil = (id, token) => {
  return async (dispatch) => {
    const headers = setHeader(token);

    try {
      Api.get("/civils/" + id, headers).then((res) => {
        let data = res.data;

        dispatch({ payload: data, type: GET_ONE_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addCivil = (data, token) => {
  return async (dispatch) => {
    const headers = setHeader(token);
    return new Promise((resolve, reject) => {
      try {
        Api.post("/civils", data, headers).then((res) => {
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

export const editCivil = (data, token) => {
  return async (dispatch) => {
    const headers = setHeader(token);
    return new Promise((resolve, reject) => {
      try {
        Api.put(`/civils/${data.id}`, data, headers).then((res) => {
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

export const uploadPhotoCivil = (id, data, token) => {
  const headers = setHeader(token);
  return async (dispatch) => {
    try {
      Api.post(`/civils/${id}/photo`, data, headers).then((res) => {
        let data = res.data;
        dispatch({ payload: data, type: UPLOAD_PHOTO_CIVIL });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

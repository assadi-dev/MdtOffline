import Api from "../../service/Api/Api";
import { uploadPhoto } from "./Civil.slice";

export const fetchAllCivils = () => {
  return Api.get("/civils");
};

export const searchCivils = (searchTerm) => {
  return Api.get("/civils/search", {
    params: {
      searchTerm: searchTerm,
    },
  });
};

export const fetchOneCivil = (id) => {
  return Api.get(`/civils/${id}`);
};

export const addCivil = (data) => {
  return Api.post("/civils", data);
};

export const editCivil = (id) => {
  return Api.put(`/civils/${id}`, data);
};

export const searchCivil = (searchTerm) => {
  return Api.get("/civils/search", {
    params: {
      searchTerm: searchTerm,
    },
  });
};

export const uploadPhotoCivil = (id, data) => {
  return async (dispatch) => {
    try {
      Api.post(`/civils/${id}/photo`, data).then((res) => {
        let data = res.data;
        dispatch(uploadPhoto(data));
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

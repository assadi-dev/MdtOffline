import Api from "../../service/Api/Api";
import {
  addAvertissement,
  deleteAvertissement,
  editAvertissement,
  uploadPhoto,
} from "./Civil.slice";

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

//Action Casier

//Avertissement
export const add_Avertissement = (data) => {
  return Api.post("/avertissements", data);
};
export const edit_Avertissement = (id, data) => {
  return Api.put(`/avertissements/${id}`, data);
};

export const delete_avertissement = (id) => {
  return Api.delete(`/avertissements/${id}`);
};

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

//RAPPORT D'ARRESTATION

//DOSSIER D'ARRESTATION

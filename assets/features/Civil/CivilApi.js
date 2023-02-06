import Api from "../../service/Api/Api";

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

export const addCivil = () => {
  return Api.post("/civils", data);
};

export const editCivil = (id) => {
  return Api.put(`/civils/${id}`, data);
};

export const uploadPhotoCivil = (id, data) => {
  Api.post(`/civils/${id}/photo`, data);
};

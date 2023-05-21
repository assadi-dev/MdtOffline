import Api from "../../service/Api/Api";
import { uploadPhoto } from "./Civil.slice";

const jsonldheader = {
  accept: "application/ld+json",
  "Content-Type": "application/ld+json",
};

export const fetchAllCivils = () => {
  return Api.get("/civils", { headers: jsonldheader });
};

export const fetchAllCivilsNextPage = (page) => {
  page ? page : 1;
  return Api.get("/civils", { headers: jsonldheader, params: { page } });
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

export const editCivil = (id, data) => {
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
  return Api.post(`/civils/${id}/photo`, data);
};

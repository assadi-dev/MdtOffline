import Api from "../../service/Api/Api";

export const fetchAllDemandeComptabilite = () => {
  return Api.get(`/demande_comptabilites`);
};

export const fetchOneDemandeComptabilite = (id) => {
  return Api.get(`/demande_comptabilites/${id}`);
};

export const add_demandeComptabilite = (data) => {
  return Api.post(`/demande_comptabilites`, data);
};

export const edit_demandeComptabilite = (id, data) => {
  return Api.put(`/demande_comptabilites/${id}`, data);
};

export const delete_demandeComptabilite = (id) => {
  return Api.delete(`/demande_comptabilites/${id}`);
};

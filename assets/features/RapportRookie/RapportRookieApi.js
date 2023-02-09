import Api from "../../service/Api/Api";

export const fetchAllRapportRookie = () => {
  return Api.get("/rapport_deputy_trainees");
};

export const add_rapportRookie = (data) => {
  return Api.post("/rapport_deputy_trainees", data);
};

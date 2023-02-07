import Api from "../../service/Api/Api";

export const add_cellule = (data) => {
  return Api.post("/cellules", data);
};

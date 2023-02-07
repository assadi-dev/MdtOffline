import Api from "../../service/Api/Api";

export const add_prison = (data) => {
  return Api.post("/prisons", data);
};

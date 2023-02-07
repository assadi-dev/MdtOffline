import Api from "../../service/Api/Api";

export const fetchAllConvocation = () => {
  return Api.get("/convocations");
};

export const addConvocation = (data) => {
  return Api.post("/convocations", data);
};

export const editConvocation = (id, data) => {
  return Api.delete(`/convocations/${id}`, data);
};

export const deleteConvocation = (id) => {
  return Api.delete(`/convocations/${id}`);
};

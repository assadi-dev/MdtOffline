import Api from "../../service/Api/Api";

export const fetchAllServices = (signal) => {
  return Api.get("/prise_de_services", { signal });
};

export const fetchOneprisedeService = (id, signal) => {
  return Api.get("/prise_de_services/" + id, { signal });
};

export const fetchServiceByWeek = (week, signal) => {
  return Api.get("/prise_de_services", {
    params: { week, "order[createdAt]": "desc" },
    signal,
  });
};

export const fetchUserServiceByWeek = (agent, week, signal) => {
  return Api.get("/prise_de_services", {
    params: { week, agent, "order[createdAt]": "desc" },
    signal,
  });
};

export const fetchLastService = (agent, signal) => {
  return Api.get("/prise_de_services", {
    params: { agent, "order[createdAt]": "desc", isActive: true },
    signal,
  });
};

export const fetchLasteActiveService = (agent, signal) => {
  return Api.get("/prise_de_services", {
    params: { agent, "order[createdAt]": "desc", isActive: true },
    signal,
  });
};

export const add_priseServices = (data) => {
  return Api.post("/prise_de_services", data);
};

export const edit_priseServices = (id, data) => {
  return Api.put(`/prise_de_services/${id}`, data);
};

export const delete_priseServices = (id) => {
  return Api.delete(`/prise_de_services/${id}`);
};

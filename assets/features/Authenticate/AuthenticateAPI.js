import Api from "../../service/Api/Api";

export const get_owner = (id, signal) => {
  return Api.get(`/users/${id}`, { signal });
};

export const editAccount = (id, data) => {
  const { idAgent, matricule, telephone, username } = data;

  const endpoints = [
    {
      url: "/agents/" + idAgent,
      body: {
        matricule,
        telephone,
        name: username,
      },
    },
    { url: "/users/" + id, body: { username } },
  ];

  return Api.put(`/agents/${idAgent}`, {
    matricule,
    telephone,
    name: username,
  });
};

export const UploadPhotoOwner = (idAgent, data) => {
  return Api.post(`/agents/${idAgent}/photo`, data);
};

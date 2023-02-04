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

  return new Promise((resolve, reject) => {
    try {
      Promise.all(
        endpoints.map((endpoint) =>
          Api.put(endpoint.url, endpoint.body, { signal: thunkApi.signal })
        )
      ).then(([{ data: agent }, { data: user }]) => {
        if (agent) {
          resolve(agent);
        }
      });
    } catch (error) {
      if (error.response) {
        let errorData = err.response.data.violations;
        reject(errorData[0].message);
      }
      reject(error.message);
    }
  });
};

export const UploadPhotoOwner = (idAgent, data, signal) => {
  return Api.post(`/agents/${idAgent}/photo`, data, {
    signal: signal,
  });
};

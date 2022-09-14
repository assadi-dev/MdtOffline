import Api from "./Api/Api";

export const connect = async (username, password) => {
  return new Promise((resolve, reject) => {
    Api.post("/login", { username, password })
      .then((res) => resolve(res.data))
      .catch((e) => reject(e.response));
  });
};

export const deconnect = async () => {
  return new Promise((resolve, reject) => {
    localStorage.clear();
    resolve("deconnected !");
  });
};

export const userRegister = async (username, password, telephone) => {
  return new Promise((resolve, reject) => {
    Api.post("/register", { username, password, telephone })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e.response));
  });
};

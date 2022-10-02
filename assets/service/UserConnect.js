import Cookies from "js-cookie";
import { TOKEN_STORAGE_NAME } from "../constants/localStorage";
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
    Cookies.remove(TOKEN_STORAGE_NAME);
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

export const refreshToken = (token) => {};

export const isTokenExpirate = (expiration) => {
  return new Date(expiration * 1000) < new Date();
};

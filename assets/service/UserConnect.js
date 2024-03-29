import axios from "axios";
import Cookies from "js-cookie";
import {
  REFRESH_TOKEN_STORAGE_NAME,
  TOKEN_STORAGE_NAME,
} from "../constants/localStorage";
import { AuthenticateInstance } from "./Api/Api";

export const connect = async (username, password) => {
  return new Promise((resolve, reject) => {
    AuthenticateInstance.post("/login", { username, password })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e.response));
  });
};

export const deconnect = async () => {
  return new Promise((resolve, reject) => {
    localStorage.clear();
    Cookies.remove(TOKEN_STORAGE_NAME, {
      path: "/",
      sameSite: "Lax",
      secure: true,
    });
    Cookies.remove(REFRESH_TOKEN_STORAGE_NAME, { path: "" });
    resolve("deconnected !");
  });
};

export const userRegister = async (username, password, telephone) => {
  return new Promise((resolve, reject) => {
    AuthenticateInstance.post("/register", { username, password, telephone })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => reject(e.response));
  });
};

export const refreshToken = (token) => {
  console.log(token);
};

export const isTokenExpirate = (expiration) => {
  return new Date(expiration * 1000) < new Date();
};

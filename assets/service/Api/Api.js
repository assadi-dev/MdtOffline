import axios from "axios";
import { TOKEN_STORAGE_NAME } from "../../constants/localStorage";

const getTokenStorage = localStorage.getItem(TOKEN_STORAGE_NAME);

const DOMAIN = process.env.REACT_APP_URLBACKEND;
let refreshToken = "refreshToken";
const instance = axios.create({
  baseURL: `${DOMAIN}/api`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${getTokenStorage}`,
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const status = error.response.status;
      const originalRequest = error.config;
      const urlRequest = error.config.url;
      const baseURL = error.config.baseURL;
      if (
        urlRequest != "/refreshToken" &&
        status === 401 &&
        originalRequest._retry !== true
      ) {
        originalRequest._retry = true;
        if (refreshToken && refreshToken != "") {
          instance.defaults.headers["Authorization"] = `Bearer ${refreshToken}`;
          console.log("instance du refresh Token");
          //await instance
        }
      }
    }
  }
);

export default instance;

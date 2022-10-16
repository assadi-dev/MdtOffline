import axios from "axios";
import Cookies from "js-cookie";
import {
  DOMAIN,
  REFRESH_TOKEN_STORAGE_NAME,
  TOKEN_STORAGE_NAME,
} from "../../constants/localStorage";

let refresh_token = Cookies.get(REFRESH_TOKEN_STORAGE_NAME);

const instance = axios.create({
  baseURL: `${DOMAIN}/api`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${Cookies.get(TOKEN_STORAGE_NAME)}`,
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error) {
      const status = error.response.status;
      const originalRequest = error.config;
      const urlRequest = error.config.url;
      const baseURL = error.config.baseURL;

      if (
        !urlRequest.includes("/token/refresh") &&
        status === 401 &&
        originalRequest._retry !== true
      ) {
        originalRequest._retry = true;
        if (refresh_token && refresh_token != "") {
          let data = {
            refresh_token: refresh_token,
          };
          //console.log("Refresh token");
          instance.defaults.headers["Authorization"] = "";
          await instance
            .post(`/token/refresh`, data)
            .then((res) => {
              const newToken = res.data.token;
              instance.defaults.headers["Authorization"] = `Bearer ${newToken}`;
              originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
              localStorage.setItem(TOKEN_STORAGE_NAME, newToken);
              Cookies.set(TOKEN_STORAGE_NAME, newToken, {
                path: "",
                sameSite: "Lax",
                secure: true,
              });
            })
            .catch((error) => {
              console.log(error);
              refresh_token = "";
              COOKIES.remove(REFRESH_TOKEN_STORAGE_NAME);
              alert(
                "Erreur le serveur n'a pas reussi à rafraichir votre session veuillez vous reconnectez ou appuyez sur F5"
              );
            });

          return instance(originalRequest);
        }
      }
    }
  }
);

export default instance;

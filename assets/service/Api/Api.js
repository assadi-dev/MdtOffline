import axios from "axios";

const getTokenStorage = localStorage.getItem("mdtOfflineToken-999");

const init = axios.create({
  baseURL: "http://176.97.210.240/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default init;

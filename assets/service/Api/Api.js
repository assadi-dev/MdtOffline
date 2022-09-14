import axios from "axios";

const getTokenStorage = localStorage.getItem("mdtOfflineToken-999");

const init = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default init;

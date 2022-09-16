import axios from "axios";

const getTokenStorage = localStorage.getItem("mdtOfflineToken-999");

const DOMAIN = process.env.REACT_APP_URLBACKEND;

const init = axios.create({
  baseURL: `${DOMAIN}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

console.log(process.env.REACT_APP_URLBACKEND);

export default init;

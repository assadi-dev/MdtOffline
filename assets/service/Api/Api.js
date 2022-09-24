import axios from "axios";
import { TOKEN_STORAGE_NAME } from "../../constants/localStorage";

const getTokenStorage = localStorage.getItem(TOKEN_STORAGE_NAME);

const DOMAIN = process.env.REACT_APP_URLBACKEND;

const init = axios.create({
  baseURL: `${DOMAIN}/api`,
  headers: {
    "Content-type": "application/json",
  },
});

export default init;

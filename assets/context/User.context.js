import { createContext } from "react";

export default createContext({
  id: "",
  username: "",
  role: "",
  isLogged: false,
  token: "",
  grade: "",
  matricule: "",
  setUser: () => {},
});

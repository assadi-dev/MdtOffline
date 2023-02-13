import { AuthenticateInstance } from "../../service/Api/Api";
export const resetpassword = (token, password) => {
  const data = { token, password };
  return AuthenticateInstance.post("/reset_password", data);
};

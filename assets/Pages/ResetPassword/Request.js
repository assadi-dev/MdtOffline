import { AuthenticateInstance } from "../../service/Api/Api";
export const resetpassword = (userId, password, confirm) => {
  return AuthenticateInstance.post("/rest-password", data);
};

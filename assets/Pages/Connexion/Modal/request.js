import { AuthenticateInstance } from "../../../service/Api/Api";

export const sendDemandpassword = (data, signal) => {
  return AuthenticateInstance.post("/forgotten_password/generate", data, {
    signal,
  });
};

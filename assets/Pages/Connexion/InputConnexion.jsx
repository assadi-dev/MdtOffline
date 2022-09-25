import React from "react";
import { InputContainer } from "./Connexion.styled";

const InputConnexion = ({ children, ...props }) => {
  return <InputContainer {...props}> {children}</InputContainer>;
};

export default InputConnexion;

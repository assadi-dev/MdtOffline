import React from "react";
import { ButtonStyled } from "./Button.styled";

export default ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

import React from "react";
import { CardContainer, CardHeader } from "./CardHeadDark.styled";

const CardHeadDark = ({ title, children, ...props }) => {
  return (
    <CardContainer {...props}>
      <CardHeader>{title}</CardHeader>
      {children}
    </CardContainer>
  );
};

export default CardHeadDark;

import React from "react";
import { CardContainer, CardHeader, ViewContent } from "./CardHeadDark.styled";

const CardHeadDark = ({ title, children, classNameHeader, ...props }) => {
  return (
    <CardContainer {...props}>
      <CardHeader className={classNameHeader}>{title}</CardHeader>
      {children}
    </CardContainer>
  );
};

export default CardHeadDark;

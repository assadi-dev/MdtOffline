import React from "react";
import { AddCircleIconFill } from "../../SVG";
import { CardContainer, CardHeader, IconButton } from "./CardHeadDark.styled";

const CardHeadDarkButton = ({
  title,
  children,
  onClick,
  classNameHeader,
  ...props
}) => {
  return (
    <CardContainer {...props}>
      <CardHeader className={classNameHeader}>
        {title}{" "}
        <IconButton onClick={onClick}>
          <AddCircleIconFill />
        </IconButton>{" "}
      </CardHeader>
      {children}
    </CardContainer>
  );
};

export default CardHeadDarkButton;

import React from "react";
import { AddCircleIconFill } from "../../SVG";
import { CardContainer, CardHeader, IconButton } from "./CardHeadDark.styled";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { TOKEN_STORAGE_NAME } from "../../../constants/localStorage";
import { EFFECTIF_ACCESS } from "../../../constants/acces";
import { isAllowedAction } from "../../../Pages/Civil/Selected/helper";

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
        {isAllowedAction(EFFECTIF_ACCESS) ? (
          <IconButton onClick={onClick}>
            <AddCircleIconFill />
          </IconButton>
        ) : null}
      </CardHeader>
      {children}
    </CardContainer>
  );
};

export default CardHeadDarkButton;

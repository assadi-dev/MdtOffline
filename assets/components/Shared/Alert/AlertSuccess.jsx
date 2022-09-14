import React from "react";
import { SuccessIcon } from "../../SVG/Connexion.svg";
import { IconAlert, RowAlert, SuccessContainer } from "./Alert.styled";

const AlertSuccess = ({ message }) => {
  return (
    <SuccessContainer>
      {" "}
      <RowAlert>
        <IconAlert>
          <SuccessIcon />
        </IconAlert>

        <p>{message}</p>
      </RowAlert>
    </SuccessContainer>
  );
};

export default AlertSuccess;

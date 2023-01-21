import React from "react";
import { DangerIcon } from "../../SVG/Connexion.svg";
import { CodeAlert, ErrorContainer, IconAlert, RowAlert } from "./Alert.styled";
const AlertError = ({ code, message, ...props }) => {
  return (
    <ErrorContainer>
      <IconAlert>
        <DangerIcon />
      </IconAlert>
      <CodeAlert>Erreur {code} </CodeAlert>
      <RowAlert {...props}>
        <p> {message}</p>
      </RowAlert>
    </ErrorContainer>
  );
};

export default AlertError;

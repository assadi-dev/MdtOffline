import React from "react";
import { DangerIcon } from "../../SVG/Connexion.svg";
import { CodeAlert, ErrorContainer, IconAlert, RowAlert } from "./Alert.styled";
const AlertError = ({ code, message, ...props }) => {
  return (
    <ErrorContainer>
      <RowAlert {...props}>
        <IconAlert>
          <DangerIcon />
        </IconAlert>
        <CodeAlert>Erreur {code}: </CodeAlert>
        <p> {message}</p>
      </RowAlert>
    </ErrorContainer>
  );
};

export default AlertError;

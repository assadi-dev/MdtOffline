import React from "react";
import { DangerIcon } from "../../SVG/Connexion.svg";
import { CodeAlert, ErrorContainer, IconAlert, RowAlert } from "./Alert.styled";
const AlertError = ({ code, message, ...props }) => {
  return (
    <ErrorContainer>
      {/* <CodeAlert>Erreur {code} </CodeAlert> */}
      <RowAlert {...props}>
        <IconAlert>
          <DangerIcon />
        </IconAlert>
        <p> {message}</p>
      </RowAlert>
    </ErrorContainer>
  );
};

export default AlertError;

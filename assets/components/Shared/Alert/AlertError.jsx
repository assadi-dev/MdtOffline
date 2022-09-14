import React from "react";
import { ErrorContainer, RowAlert } from "./Alert.styled";
const AlertError = ({ code, message }) => {
  return (
    <ErrorContainer>
      <RowAlert>
        <span>rr</span>
        <span>code:{code} </span>
        <p> {message}</p>
      </RowAlert>
    </ErrorContainer>
  );
};

export default AlertError;

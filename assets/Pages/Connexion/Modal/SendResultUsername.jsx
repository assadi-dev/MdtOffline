import React from "react";
import {
  CkeckErrorIconOutline,
  CkeckValidateIconOutline,
} from "../../../components/SVG/Loader.svg";
import {
  HelpMessage,
  IconResult,
  SendResultUsernameContainer,
} from "../Connexion.styled";
import { useState } from "react";

const SendResultUsername = ({ result, message }) => {
  return (
    <SendResultUsernameContainer>
      <IconResult className="animate-check">
        {result == "success" ? (
          <CkeckValidateIconOutline />
        ) : (
          <CkeckErrorIconOutline />
        )}
      </IconResult>

      <HelpMessage>
        <p>{message}</p>
      </HelpMessage>
    </SendResultUsernameContainer>
  );
};

export default SendResultUsername;

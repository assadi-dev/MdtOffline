import React from "react";
import {
  CloseModal,
  ForgottenPasswordViewContainer,
  HeaderModal,
} from "../Connexion.styled";
import SendUsernameForm from "./SendUsernameForm";
import SendResultUsername from "./SendResultUsername";
import { initialStateForgotten, stepStateForgottenReducer } from "../reducer";
import { useReducer } from "react";
import LoadingForgottenRequest from "./LoadingForgottenRequest";

const ModalForgottenPasswordView = ({ username, closeModal }) => {
  const [stepState, dispatchStepState] = useReducer(
    stepStateForgottenReducer,
    initialStateForgotten
  );

  const handleClose = () => {
    closeModal();
    dispatchStepState({ type: "form-step-forgotten" });
  };

  return (
    <ForgottenPasswordViewContainer>
      <HeaderModal>
        {stepState.step == "form-step-forgotten" && (
          <h2>Veuillez vous identifier :</h2>
        )}
        <CloseModal onClick={handleClose} />
      </HeaderModal>
      {stepState.step == "form-step-forgotten" && (
        <SendUsernameForm dispatchStep={dispatchStepState} />
      )}
      {stepState.step == "loading" && (
        <LoadingForgottenRequest
          dispatchStep={dispatchStepState}
          username={stepState.username}
        />
      )}
      {stepState.step == "result" && (
        <SendResultUsername
          result={stepState.result}
          message={stepState.message}
        />
      )}
    </ForgottenPasswordViewContainer>
  );
};

export default ModalForgottenPasswordView;

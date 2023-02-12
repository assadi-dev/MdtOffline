import React from "react";
import { sleep } from "../../../utils/timer";
import { useEffect } from "react";
import { LoaderContainer, Spinner } from "../Connexion.styled";

const LoadingForgottenRequest = ({ dispatchStep }) => {
  useEffect(() => {
    const payload = {
      result: "succsess",
      message:
        "Votre demande à biens été pris en compte veuillez informer un membre du Command Staff pour recevoir votre liens de reinitialisation",
    };
    sleep(3000).then(() => {
      dispatchStep({ type: "result-forgotten", payload });
    });
  }, []);

  return (
    <LoaderContainer>
      <Spinner className="circle-loader"></Spinner>
      <p>Traitement en cours</p>
    </LoaderContainer>
  );
};

export default LoadingForgottenRequest;

import React from "react";
import { sleep } from "../../../utils/timer";
import { useEffect } from "react";
import { LoaderContainer, Spinner } from "../Connexion.styled";
import { sendDemandpassword } from "./request";

const LoadingForgottenRequest = ({ dispatchStep, username }) => {
  useEffect(() => {
    const controller = new AbortController();
    const fetchSendResult = async () => {
      try {
        const res = await sendDemandpassword(
          {
            username,
          },
          controller.signal
        );
        const data = res.data;
        const payload = { message: data.message, status: "success" };
        sleep(3000).then(() => {
          dispatchStep({ type: "result-forgotten", payload });
        });
      } catch (error) {
        let message = "";
        console.log(error.respons);
        if (error.response) {
          message = error.response.data.message;
        } else {
          message = error.message;
        }
        const payload = { message, status: "error" };
        sleep(3000).then(() => {
          dispatchStep({ type: "result-forgotten", payload });
        });
      }
    };
    fetchSendResult();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <LoaderContainer>
      <Spinner className="circle-loader"></Spinner>
      <p>Traitement en cours</p>
    </LoaderContainer>
  );
};

export default LoadingForgottenRequest;

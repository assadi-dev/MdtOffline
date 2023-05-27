import React from "react";
import {
  LoadingTrombinoscop,
  LoadingTrombinoscopBody,
} from "./trombinoscop.styled";
import { SpinnerCircular } from "spinners-react";
import BounceText from "../../../components/Shared/Text/BounceText";

const LoadingTrobinoscop = () => {
  return (
    <LoadingTrombinoscop>
      {" "}
      <LoadingTrombinoscopBody>
        <SpinnerCircular
          className="spinner-content"
          size={60}
          color="#2B7DE9"
          secondaryColor="#2B7DE950"
          speed={250}
        />

        <BounceText>Récuperation des données</BounceText>
      </LoadingTrombinoscopBody>
    </LoadingTrombinoscop>
  );
};

export default LoadingTrobinoscop;

import React from "react";
import { LoadinCivilListContainer } from "./LoadingCivilList.style";
import { SpinnerCircular } from "spinners-react";
import BounceText from "../../../components/Shared/Text/BounceText";

const LoadinCivilList = () => {
  return (
    <LoadinCivilListContainer>
      <SpinnerCircular
        className="spinner-content"
        size={60}
        color="#2B7DE9"
        secondaryColor="#2B7DE950"
        speed={250}
      />
      <BounceText>Récuperation des données</BounceText>
    </LoadinCivilListContainer>
  );
};

export default LoadinCivilList;

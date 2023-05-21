import React from "react";
import { LoadinCivilListContainer } from "./LoadingCivilList.style";
import { SpinnerCircular } from "spinners-react";

const LoadinCivilList = () => {
  return (
    <LoadinCivilListContainer>
      <SpinnerCircular
        className="spinner-content"
        size={60}
        color="#2B7DE9"
        secondaryColor="#2B7DE950"
      />
      <p>Récuperation des données</p>
    </LoadinCivilListContainer>
  );
};

export default LoadinCivilList;

import React from "react";
import { LoadingTabBody, LoadingTabContainer } from "./Loading.styled";
import BounceText from "../../../components/Shared/Text/BounceText";
import { SpinnerCircular } from "spinners-react";

const LoadingTab = () => {
  return (
    <LoadingTabContainer>
      <LoadingTabBody>
        <SpinnerCircular
          className="spinner-content"
          size={60}
          color="#2B7DE9"
          secondaryColor="#2B7DE950"
          speed={250}
        />

        <BounceText>Récupération des données</BounceText>
      </LoadingTabBody>
    </LoadingTabContainer>
  );
};

export default LoadingTab;

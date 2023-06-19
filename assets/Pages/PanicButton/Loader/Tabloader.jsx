import React from "react";
import { LoadingTabBody, LoadingTabContainer } from "../PanicButtonStyle";
import { SpinnerCircular } from "spinners-react";
import BounceText from "../../../components/Shared/Text/BounceText";

const Tabloader = () => {
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

export default Tabloader;

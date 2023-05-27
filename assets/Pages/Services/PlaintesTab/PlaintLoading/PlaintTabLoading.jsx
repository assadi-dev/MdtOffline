import React from "react";
import {
  PlaintTabLoadingBody,
  PlaintTabLoadingContainer,
} from "../PlaintTab.styled";
import BounceText from "../../../../components/Shared/Text/BounceText";
import { SpinnerCircular, SpinnerCircularSplit } from "spinners-react";

const PlaintTabLoading = () => {
  return (
    <PlaintTabLoadingContainer>
      <PlaintTabLoadingBody>
        <SpinnerCircular
          className="spinner-content"
          size={60}
          color="#2B7DE9"
          secondaryColor="#2B7DE950"
          speed={250}
        />
        <BounceText> Récupération des données</BounceText>
      </PlaintTabLoadingBody>
    </PlaintTabLoadingContainer>
  );
};

export default PlaintTabLoading;

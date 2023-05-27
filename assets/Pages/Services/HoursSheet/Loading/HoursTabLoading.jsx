import React from "react";
import {
  HoursTabLoadingBody,
  HoursTabLoadingContainer,
} from "./loading.styled";
import { SpinnerCircular } from "spinners-react";
import BounceText from "../../../../components/Shared/Text/BounceText";

const HoursTabLoading = () => {
  return (
    <HoursTabLoadingContainer>
      <HoursTabLoadingBody>
        <SpinnerCircular
          className="spinner-content"
          size={60}
          color="#2B7DE9"
          secondaryColor="#2B7DE950"
          speed={250}
        />
        <BounceText>Récuperation des données...</BounceText>
      </HoursTabLoadingBody>
    </HoursTabLoadingContainer>
  );
};

export default HoursTabLoading;

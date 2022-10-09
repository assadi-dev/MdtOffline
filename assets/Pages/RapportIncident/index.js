import React from "react";
import RapportIncidentForm from "./Form/RapportIncidentForm";
import {
  HeaderRapportIncident,
  WrapperContent,
} from "./RapportIncident.styled";

const RapportIncident = () => {
  return (
    <WrapperContent>
      <HeaderRapportIncident>Créer un Rapport d'incident</HeaderRapportIncident>
      <RapportIncidentForm />
    </WrapperContent>
  );
};

export default RapportIncident;

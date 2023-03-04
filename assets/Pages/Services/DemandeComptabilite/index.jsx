import React from "react";
import {
  HeaderDemandeComptabilite,
  WrapperContent,
} from "./DemandeComptabilite.styled";
import DemandeComptabiliteForm from "./DemandeComptabiliteForm ";

const DemandeComptabilite = () => {
  return (
    <WrapperContent>
      <HeaderDemandeComptabilite>
        Faire une demande de comptabilité
      </HeaderDemandeComptabilite>
      <DemandeComptabiliteForm />
    </WrapperContent>
  );
};

export default DemandeComptabilite;

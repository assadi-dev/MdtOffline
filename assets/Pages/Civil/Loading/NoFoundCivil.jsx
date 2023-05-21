import React from "react";
import { NoFoundCivilSearchContainer } from "./LoadingCivilList.style";

export const NoFoundCivil = () => {
  return (
    <NoFoundCivilSearchContainer>
      <p>Aucun résultat contenant le terme recherché n'a été trouvé</p>
    </NoFoundCivilSearchContainer>
  );
};

export default NoFoundCivil;

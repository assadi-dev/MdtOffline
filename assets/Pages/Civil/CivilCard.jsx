import React, { Suspense } from "react";
import { CardContainer, CivilInfo } from "./Civil.styled";
import LoadingCivilPhoto from "./Loading/LoadingCivilPhoto";
import CivilCardPhoto from "./CivilCardPhoto";

const CivilCard = ({ nom, prenom, telephone, photo, index }) => {
  return (
    <CardContainer>
      <Suspense fallback={<LoadingCivilPhoto />}>
        <CivilCardPhoto src={photo} index={index} />
      </Suspense>
      <CivilInfo>
        <p className="text">{nom.toUpperCase()}</p>
        <p className="text">{prenom}</p>
        <p className="text">{telephone}</p>
      </CivilInfo>
    </CardContainer>
  );
};

export default CivilCard;

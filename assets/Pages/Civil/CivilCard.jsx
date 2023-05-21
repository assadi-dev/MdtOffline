import React, { Suspense } from "react";
import { CardContainer, CivilInfo } from "./Civil.styled";
import LoadingCivilPhoto from "./Loading/LoadingCivilPhoto";

const CivilCard = ({ nom, prenom, telephone, photo }) => {
  const CivilPhotoLazy = React.lazy(() => import("./CivilCardPhoto"));

  return (
    <CardContainer>
      <Suspense fallback={<LoadingCivilPhoto />}>
        <CivilPhotoLazy src={photo} />
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

import React from "react";
import { CardContainer, CivilInfo, CivilPhoto } from "./Civil.styled";

const CivilCard = ({ nom, prenom, telephone, photo }) => {
  return (
    <CardContainer>
      <CivilPhoto src={photo} />
      <CivilInfo>
        <p className="text">{nom.toUpperCase()}</p>
        <p className="text">{prenom}</p>
        <p className="text">{telephone}</p>
      </CivilInfo>
    </CardContainer>
  );
};

export default CivilCard;

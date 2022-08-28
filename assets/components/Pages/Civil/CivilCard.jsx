import React from "react";
import { CardContainer, CivilInfo, CivilPhoto } from "./Civil.styled";

const CivilCard = ({ nom, prenom, telephone, photo }) => {
  return (
    <CardContainer>
      <CivilPhoto src={photo} />
      <CivilInfo>
        <p className="text">Northon</p>
        <p className="text">michelle</p>
        <p className="text">555-733385</p>
      </CivilInfo>
    </CardContainer>
  );
};

export default CivilCard;

import React from "react";
import CardHeadDarkButton from "../../../Shared/CardHeadDark/CardHeadDarkButton";

const CivilSelectedCard = ({ title, openModal, children }) => {
  return (
    <CardHeadDarkButton
      fullWidth={true}
      style={{ margin: "0", width: "100%" }}
      title={title}
      onClick={openModal}
    >
      {children}
    </CardHeadDarkButton>
  );
};

export default CivilSelectedCard;

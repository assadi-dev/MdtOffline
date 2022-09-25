import React from "react";
import CardHeadDarkButton from "../../../components/Shared/CardHeadDark/CardHeadDarkButton";
import { ViewCardContent } from "./Selected.styled";

const CivilSelectedCard = ({ title, openModal, children }) => {
  return (
    <CardHeadDarkButton
      fullWidth={true}
      style={{ margin: "0", width: "100%" }}
      classNameHeader={"headerStyle"}
      title={title}
      onClick={openModal}
    >
      <ViewCardContent>{children}</ViewCardContent>
    </CardHeadDarkButton>
  );
};

export default CivilSelectedCard;

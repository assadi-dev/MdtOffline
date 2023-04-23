import React from "react";
import {
  LabeLSectionContainer,
  LabeLSectionHeader,
} from "../../Dispatch.styled";

const CardsItems = ({ card, index }) => {
  console.log(card);
  const { agent, grade, color, background } = card;
  return (
    <LabeLSectionContainer background={background} color={color}>
      <LabeLSectionHeader>{agent}</LabeLSectionHeader>
    </LabeLSectionContainer>
  );
};

export default CardsItems;

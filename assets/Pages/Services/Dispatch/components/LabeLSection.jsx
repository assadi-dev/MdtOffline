import React from "react";
import {
  LabeLSectionBody,
  LabeLSectionContainer,
  LabeLSectionHeader,
} from "../Dispatch.styled";

const LabeLSection = ({ lists }) => {
  const { title, subItems, background, color } = lists;
  return (
    <LabeLSectionContainer>
      <LabeLSectionHeader background={background} color={color}>
        {" "}
        {title}
      </LabeLSectionHeader>
      <LabeLSectionBody></LabeLSectionBody>
    </LabeLSectionContainer>
  );
};

export default LabeLSection;

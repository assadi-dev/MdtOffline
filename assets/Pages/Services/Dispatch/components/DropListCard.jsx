import React from "react";
import { DropItemContainerCard, HeaderSection } from "../Dispatch.styled";
import LabeLSection from "./LabeLSection";
import uniqid from "uniqid";

const DropListCard = ({ title, listslabels }) => {
  const { labels } = listslabels;

  return (
    <>
      <DropItemContainerCard>
        <HeaderSection>
          <h2 className="title">{title}</h2>
        </HeaderSection>
        {labels
          ? labels.map((label) => <LabeLSection key={uniqid()} lists={label} />)
          : null}
      </DropItemContainerCard>
    </>
  );
};

export default DropListCard;

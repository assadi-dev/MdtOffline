import React from "react";
import { DropItemContainerCard, HeaderSection } from "../Dispatch.styled";
import LabeLSection from "./LabeLSection";
import uniqid from "uniqid";
import { Droppable } from "react-beautiful-dnd";

const DropListCard = ({ id, title, listslabels }) => {
  return (
    <DropItemContainerCard>
      <HeaderSection>
        <h2 className="title">{title}</h2>
      </HeaderSection>
      {listslabels
        ? listslabels.map((label, index) => (
            <LabeLSection
              key={label.id}
              lists={label}
              id={label.id}
              index={index}
            />
          ))
        : null}
    </DropItemContainerCard>
  );
};

export default DropListCard;
import React from "react";
import {
  LabeLSectionBody,
  LabeLSectionContainer,
  LabeLSectionHeader,
} from "../Dispatch.styled";

import CardsItems from "./dragNdrop/CardsItems";
import AgentCardItem from "./AgentCard";
import { Droppable } from "react-beautiful-dnd";

const LabeLSection = ({ lists, index }) => {
  const { id, title, cards, background, color } = lists;

  return (
    <>
      <LabeLSectionContainer>
        <LabeLSectionHeader background={background} color={color}>
          {title}
        </LabeLSectionHeader>

        <Droppable droppableId={String(id)}>
          {(provided) => (
            <LabeLSectionBody
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.length > 0
                ? cards.map((card, index) => (
                    <AgentCardItem key={card.id} card={card} index={index} />
                  ))
                : null}
              {provided.placeholder}
            </LabeLSectionBody>
          )}
        </Droppable>
      </LabeLSectionContainer>
    </>
  );
};

export default LabeLSection;

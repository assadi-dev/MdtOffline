import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  AgentCardItemBody,
  AgentCardItemContainer,
  AgentCardItemGrade,
  AgentCardItemName,
} from "../Dispatch.styled";

const AgentsCardSquad = ({ card, index }) => {
  const { id, agent, grade, color, background } = card;
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="body-item-scrollable"
        >
          <AgentCardItemContainer
            className={snapshot.isDragging ? "isDragging" : ""}
          >
            <AgentCardItemBody background={background} color={color}>
              <AgentCardItemGrade>{grade}</AgentCardItemGrade>
              <AgentCardItemName>{agent}</AgentCardItemName>
            </AgentCardItemBody>
          </AgentCardItemContainer>
        </div>
      )}
    </Draggable>
  );
};

export default AgentsCardSquad;

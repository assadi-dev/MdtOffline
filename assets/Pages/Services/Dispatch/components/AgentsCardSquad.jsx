import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  AgenSquadtCardItemBody,
  AgentCardItemBody,
  AgentCardItemContainer,
  AgentCardItemGrade,
  AgentCardItemName,
  AgentCardItemRow,
  AgentCardStatus,
} from "../Dispatch.styled";

const AgentsCardSquad = ({ card, index }) => {
  const { id, label, title, status, note, color } = card;
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
            <AgenSquadtCardItemBody>
              <AgentCardItemRow>
                <AgentCardItemGrade>{label}</AgentCardItemGrade>
                <AgentCardStatus background={color}>{status}</AgentCardStatus>
              </AgentCardItemRow>
              <AgentCardItemName>{title}</AgentCardItemName>
            </AgenSquadtCardItemBody>
          </AgentCardItemContainer>
        </div>
      )}
    </Draggable>
  );
};

export default AgentsCardSquad;
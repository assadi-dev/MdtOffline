import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  AgenSquadtCardItemBody,
  AgenSquadtCardItemBottom,
  AgentCardItemBody,
  AgentCardItemContainer,
  AgentCardItemGrade,
  AgentCardItemName,
  AgentCardItemRow,
  AgentCardStatus,
  AgentSquadCardBtn,
} from "../Dispatch.styled";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import AgentsCardSquadBottom from "./AgentsCardSquadBottom";

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

              <AgentsCardSquadBottom id={id} />
            </AgenSquadtCardItemBody>
          </AgentCardItemContainer>
        </div>
      )}
    </Draggable>
  );
};

export default AgentsCardSquad;

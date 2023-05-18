import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  AgenSquadtCardItemBody,
  AgenSquadtCardItemBottom,
  AgentCardItemBody,
  AgentCardItemContainer,
  AgentCardItemGrade,
  AgentCardItemName,
  AgentCardItemNote,
  AgentCardItemRow,
  AgentCardStatus,
  AgentSquadCardBtn,
} from "../Dispatch.styled";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import AgentsCardSquadBottom from "./AgentsCardSquadBottom";

const AgentsCardSquad = ({ card, index }) => {
  const { id, label, title, status, note, color, isEdit } = card;

  const canDragable = isEdit ? isEdit : false;

  return (
    <Draggable
      draggableId={String(id)}
      index={index}
      isDragDisabled={canDragable}
    >
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
              <AgentCardItemNote>{note}</AgentCardItemNote>
              <AgentsCardSquadBottom id={id} canDragable={isEdit} />
            </AgenSquadtCardItemBody>
          </AgentCardItemContainer>
        </div>
      )}
    </Draggable>
  );
};

export default AgentsCardSquad;

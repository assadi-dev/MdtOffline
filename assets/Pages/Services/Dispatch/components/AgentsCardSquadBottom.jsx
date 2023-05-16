import React from "react";
import {
  AgenSquadtCardItemBottom,
  AgentSquadCardBtn,
} from "../Dispatch.styled";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import { useDispatch } from "react-redux";
import {
  deleteAgentCard,
  deleteAgentSquadCard,
} from "../../../../features/Dispatch/Dispatch.slice";

const AgentsCardSquadBottom = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAgentSquadCard({ id }));
  };

  return (
    <AgenSquadtCardItemBottom>
      <AgentSquadCardBtn title="Modifier">
        <EditPencilIcon />
      </AgentSquadCardBtn>

      <AgentSquadCardBtn title="Supprimer" onClick={handleDelete}>
        <TrashIcon />
      </AgentSquadCardBtn>
    </AgenSquadtCardItemBottom>
  );
};

export default AgentsCardSquadBottom;

import React, { useState } from "react";
import {
  AgenSquadtCardItemBottom,
  AgentSquadCardBtn,
} from "../Dispatch.styled";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import { useDispatch } from "react-redux";
import {
  deleteAgentCard,
  deleteAgentSquadCard,
  getSelectedSquadCard,
} from "../../../../features/Dispatch/Dispatch.slice";
import MenuEditSquad from "./Views/MenuEditSquad";

const AgentsCardSquadBottom = ({ id }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const onCloseEdit = () => {
    setShow(false);
  };

  const handleDelete = () => {
    dispatch(deleteAgentSquadCard({ id }));
  };

  const handleEdit = () => {
    dispatch(getSelectedSquadCard({ id }));
    setShow((current) => (current = !current));
  };

  return (
    <>
      <AgenSquadtCardItemBottom onClick={handleEdit}>
        <AgentSquadCardBtn title="Modifier">
          <EditPencilIcon />
        </AgentSquadCardBtn>

        <AgentSquadCardBtn title="Supprimer" onClick={handleDelete}>
          <TrashIcon />
        </AgentSquadCardBtn>
      </AgenSquadtCardItemBottom>
      {show && <MenuEditSquad id={id} onCloseModal={onCloseEdit} />}
    </>
  );
};

export default AgentsCardSquadBottom;

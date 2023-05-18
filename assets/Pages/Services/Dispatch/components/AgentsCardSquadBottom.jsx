import React, { useEffect, useState } from "react";
import {
  AgenSquadtCardItemBottom,
  AgentSquadCardBtn,
  AgentSquadCardTypingContainer,
} from "../Dispatch.styled";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import { useDispatch } from "react-redux";
import {
  deleteAgentCard,
  deleteAgentSquadCard,
  getSelectedSquadCard,
  toggleDragAgentsSquadCard,
} from "../../../../features/Dispatch/Dispatch.slice";
import MenuEditSquad from "./Views/MenuEditSquad";
import { DotTyping } from "../../../../components/SVG/Loader.svg";

const AgentsCardSquadBottom = ({ id, canDragable }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleDragAgentsSquadCard({ id, isEdit: show }));
  }, [show]);

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
      <AgenSquadtCardItemBottom>
        {canDragable == true && (
          <AgentSquadCardTypingContainer className={"grid-a"}>
            <DotTyping />
          </AgentSquadCardTypingContainer>
        )}
        <AgentSquadCardBtn
          title="Modifier"
          className="grid-b"
          onClick={handleEdit}
        >
          <EditPencilIcon />
        </AgentSquadCardBtn>

        <AgentSquadCardBtn
          title="Supprimer"
          onClick={handleDelete}
          className="grid-c"
        >
          <TrashIcon />
        </AgentSquadCardBtn>
      </AgenSquadtCardItemBottom>
      {show && <MenuEditSquad id={id} onCloseModal={onCloseEdit} />}
    </>
  );
};

export default AgentsCardSquadBottom;

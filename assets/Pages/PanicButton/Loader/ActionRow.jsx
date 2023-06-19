import React from "react";
import { TrashIcon } from "../../../components/SVG";
import { OutlineBtnAction, TableAction } from "../PanicButtonStyle";
import { useDispatch } from "react-redux";
import { deletePanicButtonAsync } from "../../../features/PanicButton/PanicbuttonAsync";

const ActionRow = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePanicButtonAsync({ id }));
  };

  return (
    <TableAction>
      {/*     <OutlineBtnAction
      className="edit"
      onClick={() => handlEditAgent(agent.id)}
    >
      <EditPencilIcon />
    </OutlineBtnAction> */}
      <OutlineBtnAction className="delete" onClick={handleDelete}>
        <TrashIcon />
      </OutlineBtnAction>
    </TableAction>
  );
};

export default ActionRow;

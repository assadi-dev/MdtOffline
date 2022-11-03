import React from "react";
import { EditPencilIcon, TrashIcon } from "../../../../components/SVG";
import {
  FluentMoreActiontext,
  FluentMoreDropDownContainer,
} from "./ListViewItems.styled";

const FluentMoreDropDown = ({
  isOpen,
  editFunc,
  deleteFunc,
  disabledEdit,
  disableDelete,
}) => {
  return (
    <>
      <FluentMoreDropDownContainer isOpen={isOpen}>
        {!disabledEdit ? (
          <FluentMoreActiontext className="edit" onClick={editFunc}>
            <span className="edit">
              <EditPencilIcon />
            </span>
            Editer
          </FluentMoreActiontext>
        ) : (
          <FluentMoreActiontext className="edit disabled">
            <span className="edit">
              <EditPencilIcon />
            </span>
            Editer
          </FluentMoreActiontext>
        )}
        <FluentMoreActiontext className="delete" onClick={deleteFunc}>
          <span className="delete">
            <TrashIcon />
          </span>
          Supprimer
        </FluentMoreActiontext>
      </FluentMoreDropDownContainer>
    </>
  );
};

export default FluentMoreDropDown;

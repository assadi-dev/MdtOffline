import React from "react";
import { EditPencilIcon, TrashIcon } from "../../../../SVG";
import {
  FluentMoreActiontext,
  FluentMoreDropDownContainer,
} from "./ListViewItems.styled";

const FluentMoreDropDown = ({ isOpen, editFunc, deleteFunc }) => {
  return (
    <>
      <FluentMoreDropDownContainer isOpen={isOpen}>
        <FluentMoreActiontext className="edit" onClick={editFunc}>
          <span className="edit">
            <EditPencilIcon />
          </span>
          Editer
        </FluentMoreActiontext>
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

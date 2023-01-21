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
  ...props
}) => {
  return (
    <>
      <FluentMoreDropDownContainer
        className="fluentMoreDopDown"
        isOpen={isOpen}
        {...props}
      >
        {!disabledEdit ? (
          <FluentMoreActiontext className="edit" onClick={editFunc}>
            <span className="edit">
              <EditPencilIcon />
            </span>
            Editer
          </FluentMoreActiontext>
        ) : (
          <FluentMoreActiontext className="edit disabled" role={"button"}>
            <span className="edit">
              <EditPencilIcon />
            </span>
            Editer
          </FluentMoreActiontext>
        )}
        <FluentMoreActiontext
          className="delete"
          role={"button"}
          onClick={deleteFunc}
        >
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

import React from "react";
import { MenuSelectBtn, ModalSelectContainer } from "./View.styled";
import { EditPencilIcon, TrashIcon } from "../../../../../components/SVG";
import { useRef } from "react";
import { useEffect } from "react";

const ModalSelect = ({ id, isShow, onCloseModal }) => {
  const SHOW_CLASS_MODAL = ["dropDownSelectOption"];

  isShow ? SHOW_CLASS_MODAL.push("show-option") : SHOW_CLASS_MODAL;

  const modalRef = useRef(null);

  const setCloseModal = (e) => {
    const target = e.target;
    if (target.contains(modalRef.current)) {
      onCloseModal();
    }
  };

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    document.body.addEventListener("click", setCloseModal);

    return () => {
      document.body.removeEventListener("click", setCloseModal);
    };
  }, [modalRef]);

  const handleEdit = () => {
    onCloseModal();
  };
  const handleDelete = () => {
    onCloseModal();
  };

  return (
    <ModalSelectContainer className={SHOW_CLASS_MODAL.join(" ")} ref={modalRef}>
      <MenuSelectBtn className="edit" onClick={handleEdit}>
        <EditPencilIcon /> Editer
      </MenuSelectBtn>
      <MenuSelectBtn className="delete" onClick={handleDelete}>
        <TrashIcon /> Supprimer
      </MenuSelectBtn>
    </ModalSelectContainer>
  );
};

export default ModalSelect;

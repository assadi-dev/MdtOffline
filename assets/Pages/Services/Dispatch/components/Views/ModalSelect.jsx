import React from "react";
import { MenuSelectBtn, ModalSelectContainer } from "./View.styled";
import {
  EditPencilIcon,
  TrashIcon,
  UsersAddIcon,
} from "../../../../../components/SVG";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCardItem } from "../../../../../features/Dispatch/Dispatch.slice";

const ModalSelect = ({
  id,
  isShow,
  onCloseModal,
  toggleModal,
  toggleSquadModal,
  closeAddSquadModal,
}) => {
  const SHOW_CLASS_MODAL = ["dropDownSelectOption"];

  isShow ? SHOW_CLASS_MODAL.push("show-option") : SHOW_CLASS_MODAL;

  const modalRef = useRef(null);
  const dispatch = useDispatch();

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

  const handleAddSquad = () => {
    toggleSquadModal(id);
    onCloseModal();
  };

  const handleEdit = () => {
    toggleModal(id);
    onCloseModal();
  };
  const handleDelete = () => {
    dispatch(deleteCardItem({ id }));
    onCloseModal();
  };

  return (
    <ModalSelectContainer className={SHOW_CLASS_MODAL.join(" ")} ref={modalRef}>
      <MenuSelectBtn className="add" onClick={handleAddSquad}>
        <UsersAddIcon /> Ajouter
      </MenuSelectBtn>
      <MenuSelectBtn className="edit" onClick={handleEdit}>
        <EditPencilIcon /> Editer
      </MenuSelectBtn>
      {/*    <MenuSelectBtn className="delete" onClick={handleDelete}>
        <TrashIcon /> Supprimer
      </MenuSelectBtn> */}
    </ModalSelectContainer>
  );
};

export default ModalSelect;

import React, { useReducer } from "react";
import { useDispatch } from "react-redux";

const useTabAction = (modalState, dispatchModalState) => {
  const toggleModal = (view, data) => {
    let payload = { view, data };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const closeModal = () => {
    dispatchModalState({
      type: "CLOSE_MODAL",
      payload: { view: modalState.view, data: modalState.data },
    });
  };

  const handleAddSaisie = () => {
    let payload = { view: "add-saisie", data: [] };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const handleEdit = (id) => {
    let payload = { view: "edit-saisie", data: { id } };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const handleDelete = (id, depot) => {
    let payload = { view: "delete-saisie", data: { id, depot } };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const handleShowDepot = (depot) => {
    let payload = { view: "show-depot", data: depot };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  return {
    toggleModal,
    closeModal,
    handleAddSaisie,
    handleEdit,
    handleDelete,
    handleShowDepot,
  };
};

export default useTabAction;

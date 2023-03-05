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

  const handleEdit = (id) => {
    let payload = { view: "edit-demande", data: { id } };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const handleDelete = (id, depot) => {
    let payload = { view: "delete-demande", data: { id, depot } };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const handleShowRaison = (raison) => {
    let payload = { view: "show-raison", data: raison };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  return {
    toggleModal,
    closeModal,
    handleEdit,
    handleDelete,
    handleShowRaison,
  };
};

export default useTabAction;

import React from "react";
import {
  DispatchAddSquadFormContainer,
  DispatchFormContainer,
  DispatchSubmitButton,
  MenuAddContainer,
  MenuAddSquadContainer,
  TitleMenu,
} from "./View.styled";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  clearCategorieSelected,
  editSelectedCategorie,
  generateAgentsSquadCard,
  getSelectedCategorie,
} from "../../../../../features/Dispatch/Dispatch.slice";
import { useEffect } from "react";
import { useRef } from "react";
import statusData from "./statusData";
import SelectStatus from "../SelectStatus";

const MenuAddSquad = ({ id, isShow, onCloseModal, closeAddSquadModal }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.DispatchReducer);

  const SWOW_CLASS_MODAL = ["dropDownEditForm"];

  isShow = true ? SWOW_CLASS_MODAL.push("show") : SWOW_CLASS_MODAL;

  const addFormRef = useRef();

  useEffect(() => {
    if (!id && !editFormRef.current) {
      return;
    }

    const setClose = (e) => {
      const target = e.target;
      if (target.contains(addFormRef.current)) {
        onCloseModal();
      }
    };

    document.body.addEventListener("click", setClose);

    return () => {
      dispatch(clearCategorieSelected());
    };
  }, [addFormRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    /* if (!target.title.value) {
      return;
    } */

    const payload = {
      id: id,
      title: target.title.value,
      status: target.status.value,
      note: target.note.value,
    };

    dispatch(generateAgentsSquadCard(payload));
    target.reset();
    onCloseModal();
  };

  return (
    <>
      <MenuAddSquadContainer
        className={SWOW_CLASS_MODAL.join(" ")}
        onClick={(e) => e.stopPropagation()}
        ref={addFormRef}
      >
        <TitleMenu>Créer un dispatch</TitleMenu>
        {selected ? (
          <DispatchAddSquadFormContainer onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="title">Agents</label>
              <input id="title" name="title" type="text" />
            </div>
            <fieldset>
              <legend>Carte</legend>
              <div className="form-control">
                <label htmlFor="status">Statut</label>
                <SelectStatus name={"status"} id="status" />
              </div>
              <div className="form-control">
                <label htmlFor="note">Note</label>
                <textarea name="note" id="" rows="5"></textarea>
              </div>
            </fieldset>

            <DispatchSubmitButton type="submit">Ajouter</DispatchSubmitButton>
          </DispatchAddSquadFormContainer>
        ) : null}
      </MenuAddSquadContainer>
    </>
  );
};

export default MenuAddSquad;

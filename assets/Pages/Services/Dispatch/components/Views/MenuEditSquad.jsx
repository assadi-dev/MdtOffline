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
  updateAgentsSquadCard,
} from "../../../../../features/Dispatch/Dispatch.slice";
import { useEffect, useRef } from "react";
import statusData from "./statusData";
import SelectStatus from "../SelectStatus";

const MenuEditSquad = ({ id, isShow, onCloseModal, closeAddSquadModal }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.DispatchReducer);

  const [cardData, setCardData] = useState(null);

  const SWOW_CLASS_MODAL = ["dropDownEditForm"];

  isShow = true ? SWOW_CLASS_MODAL.push("show") : SWOW_CLASS_MODAL;

  const editFormRef = useRef();

  const statusOption = statusData.map((s) => {
    return { label: s.code, value: s.code, color: s.color };
  });

  useEffect(() => {
    if (!id && !editFormRef.current) {
      return;
    }

    const setClose = (e) => {
      const target = e.target;
      if (target.contains(editFormRef.current)) {
        onCloseModal();
      }
    };

    document.body.addEventListener("click", setClose);

    if (selected) {
      let cloneSelected = { ...selected };
      let currentCard = cloneSelected.cards.find((c) => c.id == id);
      let indexStatus = statusOption.findIndex(
        (s) => s.value == currentCard.status
      );
      currentCard = { ...currentCard, defaultValue: statusOption[indexStatus] };
      setCardData((current) => (current = currentCard));
    }

    return () => {
      dispatch(clearCategorieSelected());
    };
  }, [editFormRef, selected]);

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

    dispatch(updateAgentsSquadCard(payload));
    target.reset();
    onCloseModal();
  };

  return (
    <>
      <MenuAddSquadContainer
        className={SWOW_CLASS_MODAL.join(" ")}
        onClick={(e) => e.stopPropagation()}
        ref={editFormRef}
      >
        <TitleMenu>Modifier</TitleMenu>
        {cardData ? (
          <DispatchAddSquadFormContainer onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="title">Agents</label>
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={cardData.title}
              />
            </div>
            <fieldset>
              <legend>Carte</legend>
              <div className="form-control">
                <label htmlFor="status">Statut</label>
                <SelectStatus
                  name={"status"}
                  id="status"
                  defaultInputValue={cardData.defaultValue}
                />
              </div>
              <div className="form-control">
                <label htmlFor="note">Note</label>
                <textarea
                  name="note"
                  id=""
                  rows="5"
                  defaultValue={cardData.note}
                ></textarea>
              </div>
            </fieldset>

            <DispatchSubmitButton type="submit">
              Mettre à jour
            </DispatchSubmitButton>
          </DispatchAddSquadFormContainer>
        ) : null}
      </MenuAddSquadContainer>
    </>
  );
};

export default MenuEditSquad;

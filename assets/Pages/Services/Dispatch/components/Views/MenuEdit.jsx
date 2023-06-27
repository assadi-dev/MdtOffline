import React from "react";
import {
  DispatchFormContainer,
  DispatchSubmitButton,
  MenuAddContainer,
  TitleMenu,
} from "./View.styled";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  clearCategorieSelected,
  editSelectedCategorie,
  getSelectedCategorie,
} from "../../../../../features/Dispatch/Dispatch.slice";
import { useEffect } from "react";
import { useRef } from "react";

const MenuEdit = ({ id, isShow, onCloseModal }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.DispatchReducer);

  const SWOW_CLASS_MODAL = ["dropDownEditForm"];

  isShow = true ? SWOW_CLASS_MODAL.push("show") : SWOW_CLASS_MODAL;

  const editFormRef = useRef();

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

    return () => {
      //dispatch(clearCategorieSelected());
    };
  }, [editFormRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    if (!target.title.value) {
      return;
    }

    const payload = {
      id: id,
      title: target.title.value,
      background: target.background.value,
      color: target.color.value,
    };

    dispatch(editSelectedCategorie(payload));
    target.reset();
    onCloseModal();
  };

  return (
    <>
      <MenuAddContainer
        className={SWOW_CLASS_MODAL.join(" ")}
        onClick={(e) => e.stopPropagation()}
        ref={editFormRef}
      >
        <TitleMenu>Editer</TitleMenu>
        {selected ? (
          <DispatchFormContainer onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="title">Titre</label>
              <input
                id="title"
                name="title"
                type="text"
                defaultValue={selected.title}
              />
            </div>
            <fieldset>
              <legend>Couleur</legend>
              <div className="form-control">
                <label htmlFor="background">Carte</label>
                <input
                  id="background"
                  type="color"
                  name="background"
                  defaultValue={selected.background}
                />
              </div>
              <div className="form-control">
                <label htmlFor="color">Text</label>
                <input
                  id="color"
                  name="color"
                  type="color"
                  defaultValue={selected.color}
                />
              </div>
            </fieldset>

            <DispatchSubmitButton type="submit">Valider</DispatchSubmitButton>
          </DispatchFormContainer>
        ) : null}
      </MenuAddContainer>
    </>
  );
};

export default MenuEdit;

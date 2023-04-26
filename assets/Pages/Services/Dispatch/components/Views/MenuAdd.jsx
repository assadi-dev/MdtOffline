import React from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../../../features/Dispatch/Dispatch.slice";
import {
  DispatchFormContainer,
  DispatchSubmitButton,
  MenuAddContainer,
  TitleMenu,
} from "./View.styled";

const MenuAdd = ({ title }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;

    if (!target.title.value) {
      return;
    }

    const payload = {
      title: target.title.value,
      background: target.background.value,
      color: target.color.value,
    };
    dispatch(addCategory(payload));
    target.reset();
  };

  return (
    <>
      <MenuAddContainer>
        {title ? <TitleMenu>{title}</TitleMenu> : ""}
        <DispatchFormContainer onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Titre</label>
            <input id="title" name="title" type="text" />
          </div>
          <fieldset>
            <legend>Couleur</legend>
            <div className="form-control">
              <label htmlFor="background">Carte</label>
              <input
                id="background"
                type="color"
                name="background"
                defaultValue={"#131B26"}
              />
            </div>
            <div className="form-control">
              <label htmlFor="color">Text</label>
              <input
                id="color"
                name="color"
                type="color"
                defaultValue={"#ffffff"}
              />
            </div>
          </fieldset>

          <DispatchSubmitButton type="submit">Ajouter</DispatchSubmitButton>
        </DispatchFormContainer>
      </MenuAddContainer>
    </>
  );
};

export default MenuAdd;

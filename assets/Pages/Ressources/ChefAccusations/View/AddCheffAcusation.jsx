import React from "react";
import {
  CloseModal,
  HeaderModal,
  ModalViewContainer,
} from "../ChefAccusation.styled";
import FormChefAccusation from "../Form/FormchefAccusation";
import { addChefAccusation } from "../../../../features/ChefAccusation/ChefAccusation.slice";
import { useDispatch } from "react-redux";
import { create_chefAccusations } from "../../../../features/ChefAccusation/ChefAccusationApi";

const AddCheffAcusation = ({ payload, onClose = () => {} }) => {
  const dispatch = useDispatch();

  const onAddChefAcusation = async (data) => {
    try {
      dispatch(addChefAccusation(data));
      await create_chefAccusations(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      onClose();
    }
  };

  return (
    <ModalViewContainer>
      <HeaderModal>
        <h2 className="formTitle">Ajouter un chef d'accusation</h2>
        <CloseModal onClick={onClose} />
      </HeaderModal>
      <FormChefAccusation onSave={onAddChefAcusation} />
    </ModalViewContainer>
  );
};

export default AddCheffAcusation;

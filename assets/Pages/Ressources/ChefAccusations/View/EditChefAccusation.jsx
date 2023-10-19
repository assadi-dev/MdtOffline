import React from "react";
import {
  CloseModal,
  HeaderModal,
  ModalViewContainer,
} from "../ChefAccusation.styled";
import FormChefAccusation from "../Form/FormchefAccusation";
import { useDispatch } from "react-redux";
import { editChefAccusation } from "../../../../features/ChefAccusation/ChefAccusation.slice";
import { edit_chefAccusations } from "../../../../features/ChefAccusation/ChefAccusationApi";

const EditChefAccusation = ({ payload, onClose = () => {} }) => {
  const dispatch = useDispatch();
  const onUpdateChefAcusation = async (chefAccusation) => {
    try {
      dispatch(editChefAccusation(chefAccusation));
      await edit_chefAccusations(payload.id, chefAccusation);
    } catch (error) {
      console.log(error.message);
    } finally {
      onClose();
    }
  };

  return (
    <ModalViewContainer>
      <HeaderModal>
        <h2 className="formTitle">Editer un chef d'accusation</h2>
        <CloseModal onClick={onClose} />
      </HeaderModal>
      <FormChefAccusation
        defaultValue={payload}
        onSave={onUpdateChefAcusation}
      />
    </ModalViewContainer>
  );
};

export default EditChefAccusation;

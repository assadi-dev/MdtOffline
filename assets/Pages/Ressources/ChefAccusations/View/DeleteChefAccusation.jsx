import React from "react";
import {
  BodyDeleteContent,
  CloseModal,
  DeleteHeadTitleView,
  DeleteSectionbutton,
  DeleteView,
} from "./Delete.styled";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import { useDispatch } from "react-redux";
import { removeChefAccusation } from "../../../../features/ChefAccusation/ChefAccusation.slice";
import { delete_chefAccusations } from "../../../../features/ChefAccusation/ChefAccusationApi";

const DeleteChefAccusation = ({ payload, onClose = () => {} }) => {
  const dispatch = useDispatch();

  const onConfirm = async () => {
    const id = payload.id;
    try {
      dispatch(removeChefAccusation(payload));
      await delete_chefAccusations(id);
    } catch (error) {
    } finally {
      onClose();
    }
  };

  return (
    <DeleteView>
      <DeleteHeadTitleView>
        <CloseModal className="closeBtn" onClick={onClose} />
      </DeleteHeadTitleView>
      <BodyDeleteContent>
        <p>
          Voulez vous supprimez le chef d'accusation{" "}
          <span> {payload?.infraction} </span> ?
        </p>
      </BodyDeleteContent>

      <DeleteSectionbutton>
        <div className="col-validate">
          <ButtonDefault type="button" className="btn" onClick={onConfirm}>
            CONFIRMER
          </ButtonDefault>{" "}
        </div>
        <div className="col-cancel">
          <ButtonDefault type="button" className="btn" onClick={onClose}>
            ANNULER
          </ButtonDefault>
        </div>
      </DeleteSectionbutton>
    </DeleteView>
  );
};

export default DeleteChefAccusation;

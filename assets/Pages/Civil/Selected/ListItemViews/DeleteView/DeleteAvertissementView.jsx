import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFecthData from "../../../../../hooks/useFecthData";
import {
  delete_avertissement,
  edit_Avertissement,
} from "../../../../../redux/actions/Avertissement.action";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../../components/Shared/InputTextArea";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";
import {
  DeleteHeadTitleView,
  DeleteSectionbutton,
} from "../../ModalView/ModalView.styled";

const DeleteAvertissementView = ({ id, onClose }) => {
  let numeroFormat = numeral(id);

  const agent = useSelector((state) => state.AuthenticateReducer);
  const closeModal = () => {
    onClose();
  };
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const token = agent.token;

    dispatch(delete_avertissement(id)).then(() => {
      onClose();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <DeleteHeadTitleView>
          <h2 className="titleView">
            VOULEZ VOUS SUPPRIMER L'AVERTISSEMENT N°{numeroFormat.format("000")}{" "}
          </h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </DeleteHeadTitleView>

        <DeleteSectionbutton>
          <div className="col-validate">
            {" "}
            <ButtonDefault type="submit" className="btn">
              CONFIRMER
            </ButtonDefault>{" "}
          </div>
          <div className="col-cancel">
            {" "}
            <ButtonDefault type="button" className="btn" onClick={onClose}>
              ANNULER
            </ButtonDefault>
          </div>
        </DeleteSectionbutton>
      </form>
    </>
  );
};

export default DeleteAvertissementView;

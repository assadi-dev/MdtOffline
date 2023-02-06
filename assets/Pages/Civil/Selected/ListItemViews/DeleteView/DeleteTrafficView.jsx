import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteHeadTitleView,
  DeleteSectionbutton,
} from "../../ModalView/ModalView.styled";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";

import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import numeral from "numeral";
import { deleteCivilTrafficAsync } from "../../../../../features/Civil/CasierAsyncApi";

const DeleteTrafficView = ({ id, onClose }) => {
  let numeroFormat = numeral(id);

  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;

  const closeModal = () => {
    onClose();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(deleteCivilTrafficAsync({ id }))
      .unwrap()
      .then(() => {
        onClose();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <DeleteHeadTitleView>
          <h2 className="titleView">
            VOULEZ VOUS SUPPRIMER LE TRAFFIC N°{numeroFormat.format("000")}{" "}
          </h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </DeleteHeadTitleView>

        <DeleteSectionbutton>
          <div className="col-validate">
            {" "}
            <ButtonDefault className="btn" type="submit">
              CONFIRMER
            </ButtonDefault>{" "}
          </div>
          <div className="col-cancel">
            {" "}
            <ButtonDefault className="btn" type="button" onClick={closeModal}>
              ANNULER
            </ButtonDefault>
          </div>
        </DeleteSectionbutton>
      </form>
    </>
  );
};

export default DeleteTrafficView;

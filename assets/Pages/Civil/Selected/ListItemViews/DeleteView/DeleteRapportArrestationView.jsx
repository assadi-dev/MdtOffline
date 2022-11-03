import numeral from "numeral";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";
import { AlertTriangleFill } from "../../../../../components/SVG";
import { getOneCivil } from "../../../../../redux/actions/Civil.action";
import { delete_rapportArrestation } from "../../../../../redux/actions/RapportArrestation.action";

import {
  DeleteHeadTitleView,
  DeleteSectionbutton,
} from "../../ModalView/ModalView.styled";
import {
  AlertInfo,
  AlertInfoBody,
  AlertInfoIcon,
  HeaderInfo,
} from "../ListViewItems.styled";

const DeleteRapportArrestationView = ({ id, onClose, civil }) => {
  let numeroFormat = numeral(id);

  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;
  /**
   * Reset la taille du champs text
   */
  const closeModal = () => {
    onClose();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    token &&
      dispatch(delete_rapportArrestation(id)).then(() => {
        const { id } = civil;
        dispatch(getOneCivil(id));
        onClose();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <DeleteHeadTitleView>
          <h2 className="titleView">
            VOULEZ VOUS SUPPRIMER LE RAPPORT D'ARRESTATION N°
            {numeroFormat.format("000")}
          </h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </DeleteHeadTitleView>

        <AlertInfo>
          <HeaderInfo>
            <AlertInfoIcon>
              <AlertTriangleFill />
            </AlertInfoIcon>
          </HeaderInfo>
          <AlertInfoBody>
            <p>
              {" "}
              Cette action entainera la suppression des données cellules lies à
              ce rapport d'arrestation. Ainsi qu'au dossier d'arrestation liée
            </p>
          </AlertInfoBody>
        </AlertInfo>

        <DeleteSectionbutton>
          <div className="col-validate">
            {" "}
            <ButtonDefault className="btn">CONFIRMER</ButtonDefault>{" "}
          </div>
          <div className="col-cancel">
            {" "}
            <ButtonDefault className="btn" onClick={closeModal}>
              ANNULER
            </ButtonDefault>
          </div>
        </DeleteSectionbutton>
      </form>
    </>
  );
};

export default DeleteRapportArrestationView;

import numeral from "numeral";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_dossierArrestation,
  edit_dossierArrestation,
} from "../../../../../redux/actions/DossierArrestation.action";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";
import {
  DeleteHeadTitleView,
  DeleteSectionbutton,
} from "../../ModalView/ModalView.styled";
import { delete_rapportArrestation } from "../../../../../redux/actions/RapportArrestation.action";
import { getOneCivil } from "../../../../../redux/actions/Civil.action";
import { AlertTriangleFill } from "../../../../../components/SVG";
import {
  AlertInfo,
  AlertInfoBody,
  AlertInfoIcon,
  HeaderInfo,
} from "../ListViewItems.styled";
import { deleteDossierArrestationAsync } from "../../../../../features/DossierArrestation/DossierArrestationAsyncApi";
import { getOneCivilsAsync } from "../../../../../features/Civil/CivilAsyncApi";

const DeleteDossierArrestationView = ({ id, onClose, civil }) => {
  let numeroFormat = numeral(id);

  const closeModal = () => {
    onClose();
  };

  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteDossierArrestationAsync({ id })).then(() => {
      const { id } = civil;
      dispatch(getOneCivilsAsync({ id }));
      onClose();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DeleteHeadTitleView>
          <h2 className="titleView">
            VOULEZ VOUS SUPPRIMER LE DOSSIER D'ARRESTATION N°
            {numeroFormat.format("000")}{" "}
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
              Cette action entainera la suppression des données prisons lies à
              ce dossier d'arrestation. Ainsi qu'au rapport d'arrestation liée
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

export default DeleteDossierArrestationView;

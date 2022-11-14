import React from "react";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import { AlertTriangleFill } from "../../../../components/SVG";
import {
  AlertInfo,
  AlertInfoBody,
  AlertInfoIcon,
  CloseModal,
  DeleteHeadTitleView,
  DeleteSectionbutton,
  HeaderInfo,
} from "../AcountManager.styled";

const DeleteAccountView = ({ id, username, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmitDelete}>
        <DeleteHeadTitleView>
          <h2 className="titleView">
            ETES-VOUS SUR DE SUPPRIMER LE COMPTE DE {username}
          </h2>
          <CloseModal className="closeBtn" onClick={closeModal} />
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
              Cette action entraînera la suppression des données Agent lies à ce
              compte utilisateur.Les documents créer par cette utilisateur
              resteront toujours presente
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

export default DeleteAccountView;

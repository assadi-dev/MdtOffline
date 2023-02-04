import React from "react";
import { useDispatch } from "react-redux";
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
import { deleteUsersAsync } from "../../../../features/Users/UserAsyncApi";

const DeleteAccountView = ({ id, username, onClose }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    onClose();
  };

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(deleteUsersAsync({ id }))
      .unwrap()
      .then(() => {
        onClose();
      });
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
              Cette action entraînera la suppression des données de l'agent lié
              à ce compte utilisateur.Les documents créer par cet utilisateur
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

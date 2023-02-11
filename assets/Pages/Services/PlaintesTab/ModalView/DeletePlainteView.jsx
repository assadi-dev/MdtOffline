import React from "react";
import ShowBodyDocument from "../../Modal/ShowBodyDocument";
import {
  ActionRowbtn,
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
  TextContent,
  TextFormat,
} from "../../../../components/Shared/Table/Table.styled";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import useTabAction from "../Hooks/useTabAction";
import { useDispatch } from "react-redux";
import { deletePlaintesAsync } from "../../../../features/Plaintes/PlaintesAsyncApi";

const useModalAction = useTabAction();

const DeletePlainteView = ({ id, raison, closeModal }) => {
  const dispatch = useDispatch();
  const handleDeletePlainte = (e) => {
    e.preventDefault();
    dispatch(deletePlaintesAsync({ id }))
      .unwrap()
      .then(() => {
        closeModal();
      });
  };

  return (
    <form onSubmit={handleDeletePlainte}>
      <ShowDocumentWrapper>
        <HeadTitleView>
          <h2 className="titleView">Voulez-vous supprimer ?</h2>
          <CloseModal className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <TextContent>
          <TextFormat>
            {" "}
            <p>{raison}</p>
          </TextFormat>
        </TextContent>
        <ActionRowbtn>
          <ButtonDefault className="btn delete" type="submit">
            {" "}
            CONFIRMER
          </ButtonDefault>{" "}
          <ButtonDefault className="btn" type="button" onClick={closeModal}>
            ANNULER
          </ButtonDefault>
        </ActionRowbtn>
      </ShowDocumentWrapper>
    </form>
  );
};

export default DeletePlainteView;

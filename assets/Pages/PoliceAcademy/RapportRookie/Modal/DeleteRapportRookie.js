import React from "react";
import {
  ActionRowbtn,
  CloseModal,
  HeadTitleView,
  ShowRapportRookietView,
  TextContent,
} from "../RapportRookie.styled";
import { useDispatch } from "react-redux";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import { deleteRapportRookieAsync } from "../../../../features/RapportRookie/RapportRookieAsyncApi";

const DeleteRapportRookie = ({ id, rapport, closeModal }) => {
  const dispatch = useDispatch();
  const handleSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(deleteRapportRookieAsync({ id }))
      .unwrap()
      .then(() => {
        closeModal();
      });
  };

  return (
    <form onSubmit={handleSubmitDelete}>
      <ShowRapportRookietView>
        <HeadTitleView>
          <h2 className="titleView">Voulez-vous supprimer ce rapport ? </h2>
          <CloseModal className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <TextContent>
          <p>{rapport}</p>
        </TextContent>
        <ActionRowbtn>
          <ButtonDefault className="btn delete">CONFIRMER</ButtonDefault>{" "}
          <ButtonDefault className="btn" onClick={closeModal}>
            ANNULER
          </ButtonDefault>
        </ActionRowbtn>
      </ShowRapportRookietView>
    </form>
  );
};

export default DeleteRapportRookie;

import React from "react";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import {
  ActionRowbtn,
  CloseModal,
  HeadTitleView,
  ShowRapportIncidentView,
  TextContent,
} from "../RapportIncident.styled";
import { deleteRapportIncidentAsync } from "../../../../features/RapportIncident/RapportIncidentAsyncApi";
import { useDispatch } from "react-redux";

const DeleteRapportIncident = ({ id, closeModal, rapport }) => {
  const dispatch = useDispatch();
  const handleSubmitDelete = (e) => {
    e.preventDefault();
    dispatch(deleteRapportIncidentAsync({ id }))
      .unwrap()
      .then(() => {
        closeModal();
      });
  };

  return (
    <form onSubmit={handleSubmitDelete}>
      <ShowRapportIncidentView>
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
      </ShowRapportIncidentView>
    </form>
  );
};

export default DeleteRapportIncident;

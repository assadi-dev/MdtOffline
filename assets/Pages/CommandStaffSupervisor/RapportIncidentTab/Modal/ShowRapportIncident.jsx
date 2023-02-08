import React from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowRapportIncidentView,
  TextContent,
} from "../RapportIncident.styled";

const ShowRapportIncident = ({ closeModal, rapport }) => {
  return (
    <ShowRapportIncidentView>
      <HeadTitleView>
        <h2 className="titleView"></h2>
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      <TextContent>
        <p>{rapport}</p>
      </TextContent>
    </ShowRapportIncidentView>
  );
};

export default ShowRapportIncident;

import React from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowRapportRookietView,
  TextContent,
} from "../RapportRookie.styled";

const ShowRapportRookie = ({ closeModal, rapport }) => {
  return (
    <ShowRapportRookietView>
      <HeadTitleView>
        <h2 className="titleView"></h2>
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      <TextContent>
        <p>{rapport}</p>
      </TextContent>
    </ShowRapportRookietView>
  );
};

export default ShowRapportRookie;

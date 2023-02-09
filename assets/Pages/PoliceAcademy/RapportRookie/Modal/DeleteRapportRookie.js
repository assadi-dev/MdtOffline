import React from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowRapportRookietView,
} from "../RapportRookie.styled";

const DeleteRapportRookie = ({ closeModal }) => {
  return (
    <div>
      <ShowRapportRookietView>
        <HeadTitleView>
          <h2 className="titleView">Voulez-vous supprimer ce rapport ? </h2>
          <CloseModal className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <TextContent>
          <p>{rapport}</p>
        </TextContent>
      </ShowRapportRookietView>
    </div>
  );
};

export default DeleteRapportRookie;

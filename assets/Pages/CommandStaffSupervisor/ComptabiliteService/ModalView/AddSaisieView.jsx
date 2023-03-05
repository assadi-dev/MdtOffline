import React from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
} from "../../../../components/Shared/Table/Table.styled";
import AddFormView from "./AddFormView";

const AddSaisieView = ({ closeModal }) => {
  return (
    <ShowDocumentWrapper>
      <HeadTitleView>
        <h2 className="titleView">Ajouter une saisie</h2>
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      <AddFormView onClose={closeModal} />
    </ShowDocumentWrapper>
  );
};

export default AddSaisieView;

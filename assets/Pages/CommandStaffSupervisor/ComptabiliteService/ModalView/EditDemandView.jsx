import React, { useEffect } from "react";

import EditFormView from "./EditFormView";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
} from "../../../../components/Shared/Table/Table.styled";

const EditDemandView = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const { selected, status, error } = useSelector(
    (state) => state.DemandeComptabiliteReducer
  );

  return (
    <ShowDocumentWrapper>
      <HeadTitleView>
        <h2 className="titleView">Modifier la Demande</h2>
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      <EditFormView demandeData={selected} onClose={closeModal} />
    </ShowDocumentWrapper>
  );
};

export default EditDemandView;

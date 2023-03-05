import React, { useEffect } from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
} from "../../../../components/Shared/Table/Table.styled";
import AddFormView from "./AddFormView";
import EditFormView from "./EditFormView";
import { useDispatch, useSelector } from "react-redux";

const EditSaisieView = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const { selected, status, error } = useSelector(
    (state) => state.SaisieReducer
  );

  return (
    <ShowDocumentWrapper>
      <HeadTitleView>
        <h2 className="titleView">Modifier la saisie</h2>
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      <EditFormView saisieData={selected} onClose={closeModal} />
    </ShowDocumentWrapper>
  );
};

export default EditSaisieView;

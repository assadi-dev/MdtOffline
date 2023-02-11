import React from "react";
import useTabAction from "../Hooks/useTabAction";
import useFecthData from "../../../../hooks/useFecthData";
import {
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
} from "../../../../components/Shared/Table/Table.styled";
import EditForm from "./EditForm";

const EditPlainteView = ({ id, closeModal }) => {
  const plainte = useFecthData(`/plaintes/${id}`);
  return (
    <ShowDocumentWrapper>
      {" "}
      <HeadTitleView>
        <h2 className="titleView">Modifier la plainte</h2>
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      {<EditForm plainteData={plainte.data} onClose={closeModal} />}
    </ShowDocumentWrapper>
  );
};

export default EditPlainteView;

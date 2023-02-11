import React from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
  TextContent,
  TextFormat,
} from "../../../components/Shared/Table/Table.styled";

const ShowBodyDocument = ({ closeModal, textContent, title }) => {
  return (
    <ShowDocumentWrapper>
      <HeadTitleView>
        {title && <h2 className="titleView">{title}</h2>}
        <CloseModal className="closeBtn" onClick={closeModal} />
      </HeadTitleView>
      <TextContent>
        <TextFormat>
          <p>{textContent}</p>
        </TextFormat>
      </TextContent>
    </ShowDocumentWrapper>
  );
};

export default ShowBodyDocument;

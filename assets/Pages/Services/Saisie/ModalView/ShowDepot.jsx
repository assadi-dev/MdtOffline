import React from "react";
import {
  CloseModal,
  HeadTitleView,
  ShowDocumentWrapper,
  TextContent,
  TextFormat,
} from "../../../../components/Shared/Table/Table.styled";

const ShowDepot = ({ title, textContent, closeModal }) => {
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

export default ShowDepot;

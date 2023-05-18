import React from "react";
import {
  CallRadioViewBody,
  CallRadioViewOverlay,
  CloseBtn,
  HeaderModalRow,
} from "./View.styled";
import callRadioList from "./callRadioList";
import CallListView from "./CallListView";

const CallRadioViewModal = ({ stateModal, onClose }) => {
  return (
    <CallRadioViewOverlay>
      <CallRadioViewBody isOpen={stateModal}>
        <HeaderModalRow>
          <CloseBtn onClick={onClose} />
        </HeaderModalRow>
        <CallListView lists={callRadioList} />
      </CallRadioViewBody>{" "}
    </CallRadioViewOverlay>
  );
};

export default CallRadioViewModal;

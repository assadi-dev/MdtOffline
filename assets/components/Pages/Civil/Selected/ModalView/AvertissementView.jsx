import React, { useRef } from "react";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../Shared/InputTextArea";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import { FooterSectionButton, HeadTitleView } from "./ModalView.styled";

const AvertissementView = ({ onClose }) => {
  const textAreaRef = useRef();
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    textInput.removeAttribute("style");
  };

  return (
    <>
      <form action="">
        <HeadTitleView>
          <h2 className="titleView">AVERTISSEMENT</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea
            style={{ resize: "none" }}
            rows={3}
            placeholder="Lieux de remplissage"
            autoFocus={true}
          />
        </div>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea rows={3} placeholder="Ecrivez les avertissements" />
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default AvertissementView;

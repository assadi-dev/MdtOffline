import React, { useRef } from "react";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import Input from "../../../../Shared/Input";
import InputTextArea from "../../../../Shared/InputTextArea";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
} from "./ModalView.styled";

const RapportArrestation = ({ onClose }) => {
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
          <h2 className="titleView">RAPPORT D'ARRESTATION</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <div className="form-control" ref={textAreaRef}>
          <div>
            <Input placeholder="Lieu de remplissage" />
            <input type="date" name="entreeCellule" id="" placeholder="dd" />
          </div>
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

export default RapportArrestation;

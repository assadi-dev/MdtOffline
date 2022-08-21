import React, { useRef } from "react";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import Input from "../../../../Shared/Input";
import InputTextArea from "../../../../Shared/InputTextArea";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import Select from "../../../../Shared/select";
import {
  BorderZone,
  FooterSectionButton,
  HeadTitleView,
} from "./ModalView.styled";

const TrafficView = ({ onClose }) => {
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
          <h2 className="titleView">TRAFFIC</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea
            style={{ resize: "none" }}
            rows={3}
            placeholder="Lieux de remplissage"
          />
        </div>
        <div className="form-control" ref={textAreaRef}>
          <Select>
            <option value="">Choisissez un chef d'acusation</option>
          </Select>

          <div className="form-control"></div>

          <div className="form-control">
            <BorderZone>
              {" "}
              <p className="label">Ammende</p> <p className="mount">0</p>{" "}
            </BorderZone>
          </div>
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default TrafficView;

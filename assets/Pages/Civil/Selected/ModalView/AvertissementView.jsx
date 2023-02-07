import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAvertissement } from "../../../../redux/actions/Avertissement.action";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../components/Shared/InputTextArea";
import CloseModalBtn from "../../../../components/Shared/Modal/CloseModal";
import { FooterSectionButton, HeadTitleView } from "./ModalView.styled";
import { addAvertissementAsync } from "../../../../features/Avertissements/AvertissementAsynApi";

const AvertissementView = ({ onClose, idCivil }) => {
  const textAreaRef = useRef();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    textInput.removeAttribute("style");
  };
  const dispatch = useDispatch();

  const [inputState, setIputState] = useState({
    lieux: "",
    comments: "",
    agent: `${agent.matricule}-${agent.username}`,
    civil: `api/civils/${idCivil}`,
    idAgent: agent.idAgent,
  });

  const handleChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setIputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = { ...inputState };
    dispatch(addAvertissementAsync(data))
      .unwrap()
      .then(() => {
        onClose();
      });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
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
            name="lieux"
            value={inputState.lieux}
            onChange={handleChangeInput}
          />
        </div>
        <div className="form-control" ref={textAreaRef}>
          <InputTextArea
            rows={3}
            placeholder="Ecrivez les avertissements"
            name="comments"
            value={inputState.comments}
            onChange={handleChangeInput}
          />
        </div>
        <FooterSectionButton>
          <ButtonDefault className="btn">Envoyer</ButtonDefault>
        </FooterSectionButton>
      </form>
    </>
  );
};

export default AvertissementView;

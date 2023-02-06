import numeral from "numeral";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFecthData from "../../../../../hooks/useFecthData";
import ButtonDefault from "../../../../../components/Shared/Buttons/ButtonDefault";
import InputTextArea from "../../../../../components/Shared/InputTextArea";
import CloseModalBtn from "../../../../../components/Shared/Modal/CloseModal";
import {
  FooterSectionButton,
  HeadTitleView,
} from "../../ModalView/ModalView.styled";
import { editAvertissementAsync } from "../../../../../features/Civil/CasierAsyncApi";

const EditAvertissementView = ({ id, onClose }) => {
  let numeroFormat = numeral(id);

  const textAreaRef = useRef();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const closeModal = () => {
    onClose();
    let textInput = textAreaRef.current.querySelector("textarea");
    textInput.removeAttribute("style");
  };
  const dispatch = useDispatch();
  const { data } = useFecthData(`/avertissements/${id}`);

  const [inputState, setIputState] = useState({
    lieux: "",
    comments: "",
  });

  useEffect(() => {
    data && setIputState({ lieux: data.lieux, comments: data.comments });
  }, [data]);

  const handleChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setIputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let data = { ...inputState };

    dispatch(editAvertissementAsync({ id, data })).then(() => {
      onClose();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <HeadTitleView>
          <h2 className="titleView">
            EDITER L'AVERTISSEMENT N°{numeroFormat.format("000")}{" "}
          </h2>
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

export default EditAvertissementView;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_convocation } from "../../../../../redux/actions/Convocation.action";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import Input from "../../../../Shared/Input";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import ListConvocationItem from "../ListItemViews/ListConvocationItem";
import {
  FooterCardTopButton,
  FooterSectionButton,
  FooterSectionSubmit,
  FormBodyToBtn,
  FormBodyTopBtn,
  FormLabel,
  HeadTitleView,
  RowCardTopButton,
} from "./ModalView.styled";

const EditConvocationView = ({ onClose, idCivil, listConvocation }) => {
  const closeModal = () => {
    onClose();
  };

  const dispatch = useDispatch();
  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;

  const [inputState, setInputState] = useState({
    raison: "",
    dateConvocation: "",
    dateExpiration: "",
  });

  const handleChangeValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      motif: inputState.raison,
      dateConvocation: inputState.dateConvocation,
      expiration: inputState.dateExpiration,
      civil: `api/civils/${idCivil}`,
      agent: `${agent.matricule}-${agent.username}`,
    };
    token && dispatch(add_convocation(data));
  };

  return (
    <>
      <div>
        <HeadTitleView>
          <h2 className="titleView">CONVOCATION</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <RowCardTopButton>
          {listConvocation.length
            ? listConvocation.map((convocation) => (
                <ListConvocationItem
                  key={convocation.id}
                  numero={convocation.id}
                  agent={convocation.agent}
                  motif={convocation.motif}
                  dateConvocation={convocation.dateConvocation}
                  dateExpiration={convocation.expiration}
                />
              ))
            : null}
        </RowCardTopButton>
      </div>
      <FooterCardTopButton>
        <form onSubmit={handleSubmit}>
          <h2 className="titleFooterTopButton">NOUVELLE CONVOCATION</h2>
          <FormBodyTopBtn>
            <div className="form-control">
              <FormLabel htmlFor="raison" className="formLabel">
                Raison
              </FormLabel>
              <Input
                idInput="raison"
                inputName={"raison"}
                onChange={handleChangeValue}
                value={inputState.raison}
              />
            </div>
            <div className="form-control">
              <FormLabel htmlFor="dateConvocation" className="formLabel">
                Date de convocation
              </FormLabel>
              <Input
                type="datetime-local"
                idInput="dateConvocation"
                inputName={"dateConvocation"}
                onChange={handleChangeValue}
                value={inputState.dateConvocation}
              />
            </div>
            <div className="form-control">
              <FormLabel htmlFor="dateExpiration" className="formLabel">
                Date d'expiration
              </FormLabel>
              <Input
                type="datetime-local"
                idInput="dateExpiration"
                inputName={"dateExpiration"}
                onChange={handleChangeValue}
                value={inputState.dateExpiration}
              />
            </div>
            <FooterSectionSubmit>
              <ButtonDefault className="btn">Envoyer</ButtonDefault>
            </FooterSectionSubmit>
          </FormBodyTopBtn>
        </form>
      </FooterCardTopButton>
    </>
  );
};

export default EditConvocationView;

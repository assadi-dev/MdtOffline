import React from "react";
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

const ConvocationView = ({ onClose, idCivil }) => {
  const closeModal = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <HeadTitleView>
          <h2 className="titleView">CONVOCATION</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <RowCardTopButton>
          <ListConvocationItem />
          <ListConvocationItem />
          <ListConvocationItem />
          <ListConvocationItem />
          <ListConvocationItem />
          <ListConvocationItem />
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
              <Input idInput="raison" inputName={"raison"} />
            </div>
            <div className="form-control">
              <FormLabel htmlFor="dateExpiration" className="formLabel">
                Date d'exoiration
              </FormLabel>
              <Input
                type="datetime-local"
                idInput="dateExpiration"
                inputName={"dateExpiration"}
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

export default ConvocationView;

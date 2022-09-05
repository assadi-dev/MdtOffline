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

const CelluleView = ({ onClose, idCivil }) => {
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
          <h2 className="titleView">CELLULE</h2>
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
          <FormBodyTopBtn>
            <div className="form-control">
              <FormLabel htmlFor="entree" className="formLabel">
                Entrée
              </FormLabel>
              <Input
                type="datetime-local"
                idInput="entree"
                inputName={"entree"}
              />
            </div>
            <div className="form-control">
              <FormLabel htmlFor="sortie" className="formLabel">
                Sortie
              </FormLabel>
              <Input
                type="datetime-local"
                idInput="sortie"
                inputName={"sortie"}
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

export default CelluleView;

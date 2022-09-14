import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cellule } from "../../../../../redux/actions/Cellule.action ";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import Input from "../../../../Shared/Input";
import CloseModalBtn from "../../../../Shared/Modal/CloseModal";
import ListCelluleItem from "../ListItemViews/ListCelluleItem";
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

const CelluleView = ({ onClose, idCivil, listCellule }) => {
  const closeModal = () => {
    onClose();
  };

  const agent = useSelector((state) => state.AuthenticateReducer);
  const token = agent.token;

  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({
    agent: `${agent.matricule}-${agent.username}`,
    entree: "",
    sortie: "",
    civil: `api/civil/${idCivil}`,
  });

  const handleChangeValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      entree: inputState.entree,
      sortie: inputState.sortie,
      agent: `${agent.matricule}-${agent.username}`,
      civil: `api/civils/${idCivil}`,
    };

    token && dispatch(add_cellule(data, token));
  };

  return (
    <>
      <div>
        <HeadTitleView>
          <h2 className="titleView">CELLULE</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <RowCardTopButton>
          {listCellule.length
            ? listCellule.map((cellule) => (
                <ListCelluleItem
                  key={cellule.id}
                  numero={cellule.id}
                  agent={cellule.agent}
                  entree={cellule.entree}
                  sortie={cellule.sortie}
                />
              ))
            : null}
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
                value={inputState.entree}
                onChange={handleChangeValue}
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
                value={inputState.sortie}
                onChange={handleChangeValue}
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

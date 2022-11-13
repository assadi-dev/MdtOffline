import numeral from "numeral";
import React from "react";
import {
  dateForCivilListView,
  dateForModalTop,
} from "../../../../utils/dateFormat";
import { OPEN_MODAL, TOGGLE_MODAL } from "../Reducer/ModalReducer";
import {
  CardTopButtonContainer,
  TextCardModalTopBtn,
} from "./ListViewItems.styled";

const ListCelluleItem = ({
  numero,
  agent,
  entree,
  sortie,
  readRapportModal,
  idRapport,
}) => {
  let numeroFormat = numeral(numero);
  entree = entree || new Date();
  sortie = sortie || new Date();

  const handleRead = (idRapport) => {
    if (idRapport) {
      readRapportModal(idRapport);
    }
  };

  return (
    <>
      <CardTopButtonContainer onClick={handleRead}>
        <div className="headerlistViewTop">
          <p className="numeroTitle "> N°{numeroFormat.format("000")}</p>
          <TextCardModalTopBtn>
            <span className="special">Entrée : </span> Le{" "}
            {dateForModalTop(entree)}
          </TextCardModalTopBtn>
          <TextCardModalTopBtn>
            <span className="special">Sortie : </span> Le{" "}
            {dateForModalTop(sortie)}
          </TextCardModalTopBtn>
          <TextCardModalTopBtn>
            <span className="special">Agent: </span>
            {agent}
          </TextCardModalTopBtn>
        </div>
      </CardTopButtonContainer>
    </>
  );
};

export default ListCelluleItem;

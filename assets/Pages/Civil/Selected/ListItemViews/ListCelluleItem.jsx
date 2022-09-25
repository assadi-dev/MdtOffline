import numeral from "numeral";
import React from "react";
import {
  dateForCivilListView,
  dateForModalTop,
} from "../../../../utils/dateFormat";
import {
  CardTopButtonContainer,
  TextCardModalTopBtn,
} from "./ListViewItems.styled";

const ListCelluleItem = ({ numero, agent, entree, sortie }) => {
  let numeroFormat = numeral(numero);
  entree = entree || new Date();
  sortie = sortie || new Date();

  return (
    <CardTopButtonContainer>
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
  );
};

export default ListCelluleItem;

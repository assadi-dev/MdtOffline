import numeral from "numeral";
import React from "react";
import { dateForModalTop } from "../../../../utils/dateFormat";
import {
  CardTopButtonContainer,
  TextCardModalTopBtn,
} from "./ListViewItems.styled";

const ListConvocationItem = ({
  numero,
  motif,
  agent,
  dateConvocation,
  dateExpiration,
}) => {
  let numeroFormat = numeral(numero);
  dateExpiration = dateExpiration || new Date();
  dateConvocation = dateConvocation || new Date();
  return (
    <CardTopButtonContainer>
      <div className="headerlistViewTop">
        <p className="numeroTitle "> N°{numeroFormat.format("000")}</p>
        <TextCardModalTopBtn>
          <span className="special">Motif : </span>
          {motif}
        </TextCardModalTopBtn>
        <TextCardModalTopBtn>
          <span className="special">Convoqué par : </span>
          {agent} le {dateForModalTop(dateConvocation)}
        </TextCardModalTopBtn>
        <TextCardModalTopBtn>
          <span className="special">Expire le: </span>{" "}
          {dateForModalTop(dateExpiration)}
        </TextCardModalTopBtn>
      </div>
    </CardTopButtonContainer>
  );
};

export default ListConvocationItem;

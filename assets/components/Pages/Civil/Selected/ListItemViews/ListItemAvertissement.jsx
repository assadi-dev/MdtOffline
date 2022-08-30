import React from "react";
import {
  AgentItemView,
  DateItemView,
  ListContainer,
  ListContent,
  NumberView,
  TitleItemView,
} from "./ListViewItems.styled";
import numeral from "numeral";
import { dateForCivilListView } from "../../../../../utils/dateFormat";

const ListItemAvertissement = ({ numero, agent, date, comment }) => {
  let numeroFormat = numeral(numero);
  date = date || new Date();
  return (
    <ListContainer>
      <ListContent>
        <NumberView className="text-end">
          N°{numeroFormat.format("000")}
        </NumberView>

        <TitleItemView>Fait :</TitleItemView>
        <p>{comment}</p>
        <AgentItemView>
          <span className="agent">Agent : </span> {agent}
        </AgentItemView>
        {<DateItemView> {dateForCivilListView(date)}</DateItemView>}
      </ListContent>
    </ListContainer>
  );
};

export default ListItemAvertissement;

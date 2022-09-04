import React from "react";
import {
  AgentItemView,
  DateItemView,
  ListContainer,
  ListContent,
  MoreIconBtn,
  NumberView,
  RowIcon,
  TitleItemView,
} from "./ListViewItems.styled";
import numeral from "numeral";
import { dateForCivilListView } from "../../../../../utils/dateFormat";
import { FluentMoreCircleFill } from "../../../../SVG";

const ListItemAvertissement = ({ numero, agent, date, comment }) => {
  let numeroFormat = numeral(numero);
  date = date || new Date();
  return (
    <ListContainer>
      <ListContent>
        <RowIcon>
          {" "}
          <NumberView className="text-end">
            N°{numeroFormat.format("000")}
          </NumberView>
          <MoreIconBtn className="m-left-1 ">
            <FluentMoreCircleFill />
          </MoreIconBtn>
        </RowIcon>

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

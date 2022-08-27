import React from "react";
import {
  AgentItemView,
  DateItemView,
  ListContainer,
  ListContent,
  NumberView,
  TitleItemView,
} from "./ListViewItems.styled";

const ListItemAvertissement = ({ numero, fait, agent, date }) => {
  return (
    <ListContainer>
      <ListContent>
        <NumberView className="text-end">N°606</NumberView>

        <TitleItemView>Fait :</TitleItemView>
        <p>Excès de vitesse</p>
        <AgentItemView>
          <span className="agent">Agent : </span> 98-Tommy-Stewart
        </AgentItemView>
        <DateItemView> 14:07 - 07/08/2022 </DateItemView>
      </ListContent>
    </ListContainer>
  );
};

export default ListItemAvertissement;

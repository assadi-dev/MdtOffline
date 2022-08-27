import React from "react";
import {
  AgentItemView,
  ListContainer,
  ListContent,
  NumberView,
  TitleItemView,
} from "./ListViewItems";

const ListItemAvertissement = () => {
  return (
    <ListContainer>
      <ListContent>
        <NumberView className="text-end">N°606</NumberView>

        <TitleItemView>Fait :</TitleItemView>
        <p>Excès de vitesse</p>
        <AgentItemView>
          <span className="agent">Agent : </span> 98-Tommy-Stewart
        </AgentItemView>
      </ListContent>
    </ListContainer>
  );
};

export default ListItemAvertissement;

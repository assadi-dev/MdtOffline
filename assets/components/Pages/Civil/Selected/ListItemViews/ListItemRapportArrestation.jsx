import React from "react";
import {
  AgentItemView,
  AmendItemView,
  DateItemView,
  ListContainer,
  ListContent,
  ListViewOffence,
  NumberView,
  RowListItemView,
  TicketView,
  TitleItemView,
  UpListView,
} from "./ListViewItems.styled";

const ListItemRapportArrestation = ({ numero, fait, agent, date }) => {
  return (
    <ListContainer>
      <ListContent>
        <RowListItemView>
          <TicketView className="text-start">Ticket</TicketView>
          <NumberView className="text-end">N°606</NumberView>
        </RowListItemView>
        <ListViewOffence>
          {" "}
          <p>Offence :</p>
          <ul>
            <li> Excès de vitesse</li>
            <li> Excès de vitesse</li>
            <li> Excès de vitesse</li>
          </ul>
        </ListViewOffence>
        <RowListItemView>
          {" "}
          <AgentItemView>
            <span className="agent">Agent : </span> 98-Tommy-Stewart
          </AgentItemView>{" "}
          <DateItemView> 14:07 - 07/08/2022 </DateItemView>
        </RowListItemView>

        <RowListItemView>
          <AmendItemView> 4200 $ </AmendItemView>
          <UpListView> 0:05:00</UpListView>
        </RowListItemView>
      </ListContent>
    </ListContainer>
  );
};

export default ListItemRapportArrestation;

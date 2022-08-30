import React from "react";
import PropTypes from "prop-types";
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
import numeral from "numeral";
import { dateForCivilListView } from "../../../../../utils/dateFormat";

const ListItemRapportArrestation = ({
  numero,
  amend,
  agent,
  date,
  peine,
  offence,
}) => {
  let numeroFormat = numeral(numero);
  return (
    <ListContainer>
      <ListContent>
        <RowListItemView>
          <TicketView className="text-start">Ticket</TicketView>
          <NumberView className="text-end">
            N°{numeroFormat.format("000")}
          </NumberView>
        </RowListItemView>
        <ListViewOffence>
          {" "}
          <p>Offence :</p>
          <ul>
            <ul>
              {offence.length > 0 &&
                offence.map((v, i) => <li key={i}>{v}</li>)}
            </ul>
          </ul>
        </ListViewOffence>
        <RowListItemView>
          {" "}
          <AgentItemView>
            <span className="agent">Agent : </span> {agent}
          </AgentItemView>{" "}
          <DateItemView> {dateForCivilListView(date)} </DateItemView>
        </RowListItemView>

        <RowListItemView>
          <AmendItemView> {amend} $ </AmendItemView>
          <UpListView> {peine}</UpListView>
        </RowListItemView>
      </ListContent>
    </ListContainer>
  );
};

ListItemRapportArrestation.proptypes = {
  numero: PropTypes.number,
  offence: PropTypes.arrayOf(PropTypes.string),
  agent: PropTypes.string,
  amend: PropTypes.number,
};

ListItemRapportArrestation.defaultProps = {
  amend: 0,
  numero: 0,
  date: new Date(),
  offence: [],
  peine: "0:00:00",
};

export default ListItemRapportArrestation;

import numeral from "numeral";
import React from "react";
import { dateForCivilListView } from "../../../../../utils/dateFormat";
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
} from "./ListViewItems.styled";
import PropTypes from "prop-types";
import { FluentMoreCircleFill } from "../../../../SVG";

const ListItemTraffic = ({ numero, offence, agent, date, amend }) => {
  let numeroFormat = numeral(numero);

  return (
    <ListContainer>
      <ListContent>
        <RowListItemView>
          <TicketView className="text-start">Ticket</TicketView>
          <NumberView className="text-end">
            N°{numeroFormat.format("000")}
          </NumberView>
          <span>
            <FluentMoreCircleFill />
          </span>
        </RowListItemView>
        <ListViewOffence>
          {" "}
          <p>Offence :</p>
          <ul>
            {offence.length > 0 && offence.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        </ListViewOffence>

        <AgentItemView>
          {" "}
          <span className="agent">Agent : </span> {agent}
        </AgentItemView>
        <RowListItemView>
          <AmendItemView> {amend} $</AmendItemView>
          <DateItemView> {dateForCivilListView(date)} </DateItemView>
        </RowListItemView>
      </ListContent>
    </ListContainer>
  );
};

ListItemTraffic.proptypes = {
  numero: PropTypes.number,
  offence: PropTypes.arrayOf(PropTypes.string),
  agent: PropTypes.string,
  amend: PropTypes.number,
};

ListItemTraffic.defaultProps = {
  amend: 0,
  numero: 0,
  date: new Date(),
  offence: [],
};

export default ListItemTraffic;

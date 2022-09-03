import React from "react";
import PropTypes from "prop-types";
import {
  AgentItemView,
  AmendItemView,
  DateItemView,
  ListContainer,
  ListContent,
  ListViewOffence,
  MoreIconBtn,
  NumberView,
  RowIcon,
  RowListItemView,
  TicketView,
  TitleItemView,
  UpListView,
} from "./ListViewItems.styled";
import numeral from "numeral";
import { dateForCivilListView } from "../../../../../utils/dateFormat";
import { FluentMoreCircleFill } from "../../../../SVG";

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

          <RowIcon>
            {" "}
            <NumberView className="text-end">
              N°{numeroFormat.format("000")}
            </NumberView>
            <MoreIconBtn className="m-left-1 ">
              <FluentMoreCircleFill />
            </MoreIconBtn>
          </RowIcon>
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

import React, { useEffect, useState, useRef } from "react";
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
import FluentMoreDropDown from "./FluentMoreDropDown";
import { sleep } from "../../../../../utils/timer";

const ListItemRapportArrestation = ({
  numero,
  amend,
  agent,
  date,
  peine,
  offence,
}) => {
  let numeroFormat = numeral(numero);

  const [openMore, setOpenMore] = useState(false);
  const moreIconBtnRef = useRef();
  useEffect(() => {
    const closeDropDown = (e) => {
      const target = e.target;
      if (!moreIconBtnRef.current.contains(target)) {
        sleep(100).then(() => {
          setOpenMore(false);
        });
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => document.removeEventListener("mousedown", closeDropDown);
  }, []);

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
            <MoreIconBtn
              className="m-left-1"
              onClick={() => setOpenMore(!openMore)}
              ref={moreIconBtnRef}
            >
              <FluentMoreCircleFill />
            </MoreIconBtn>
            <FluentMoreDropDown isOpen={openMore} />
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

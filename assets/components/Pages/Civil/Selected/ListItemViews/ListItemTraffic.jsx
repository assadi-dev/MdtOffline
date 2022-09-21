import numeral from "numeral";
import React, { useRef, useState, useEffect } from "react";
import { dateForCivilListView } from "../../../../../utils/dateFormat";
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
} from "./ListViewItems.styled";
import PropTypes from "prop-types";
import { FluentMoreCircleFill } from "../../../../SVG";
import FluentMoreDropDown from "./FluentMoreDropDown";
import { sleep } from "../../../../../utils/timer";

const ListItemTraffic = ({ numero, offence, agent, date, amend }) => {
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

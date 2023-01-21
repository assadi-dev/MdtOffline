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
import { dateForCivilListView } from "../../../../utils/dateFormat";
import { FluentMoreCircleFill } from "../../../../components/SVG";
import FluentMoreDropDown from "./FluentMoreDropDown";
import { sleep } from "../../../../utils/timer";
import { TOGGLE_MODAL } from "../Reducer/ModalReducer";
import { SUPERVISOR_ACCESS } from "../../../../constants/acces";
import { isAllowedAction } from "../helper";

const ListItemRapportArrestation = ({
  id,
  numero,
  amende,
  agent,
  date,
  peine,
  offence,
  conversionUp,
  dispatchOpenModal,
  disabledEdit,
}) => {
  let numeroFormat = numeral(numero);

  const [openMore, setOpenMore] = useState(false);
  const moreIconBtnRef = useRef();
  /*   useEffect(() => {
    const closeDropDown = (e) => {
      const target = e.target;
      const moreIconDropdown = document.querySelector(".fluentMoreDopDown");

      if (!moreIconDropdown.contains(target)) {
        sleep(100).then(() => {
          setOpenMore((current) => (current = false));
        });
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => document.removeEventListener("mousedown", closeDropDown);
  }, []); */

  const handleRead = () => {
    return (
      !isAllowedAction(SUPERVISOR_ACCESS) &&
      dispatchOpenModal({
        type: TOGGLE_MODAL,
        payload: { view: "read-rapport-d-arrestation", id },
      })
    );
  };

  const handleEdit = () => {
    setOpenMore((current) => (current = false));

    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-rapport-d-arrestation", id },
    });
  };

  const handleDelete = () => {
    setOpenMore((current) => (current = false));

    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "delete-rapport-d-arrestation", id },
    });
  };

  return (
    <ListContainer onClick={handleRead}>
      <ListContent>
        <RowListItemView>
          <TicketView className="text-start">Ticket</TicketView>

          <RowIcon>
            {" "}
            <NumberView className="text-end">
              N°{numeroFormat.format("000")}
            </NumberView>
            {isAllowedAction(SUPERVISOR_ACCESS) && (
              <>
                {" "}
                <MoreIconBtn
                  className="m-left-1"
                  onClick={() =>
                    setOpenMore((current) => (current = !openMore))
                  }
                  ref={moreIconBtnRef}
                >
                  <FluentMoreCircleFill />
                </MoreIconBtn>
                <FluentMoreDropDown
                  isOpen={openMore}
                  editFunc={handleEdit}
                  deleteFunc={handleDelete}
                  disabledEdit={disabledEdit}
                />{" "}
              </>
            )}
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
          <AmendItemView> {conversionUp ? 0 : amende} $ </AmendItemView>
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

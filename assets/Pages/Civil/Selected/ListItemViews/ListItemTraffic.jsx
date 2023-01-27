import numeral from "numeral";
import React, { useRef, useState, useEffect } from "react";
import { dateForCivilListView } from "../../../../utils/dateFormat";
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
import { FluentMoreCircleFill } from "../../../../components/SVG";
import FluentMoreDropDown from "./FluentMoreDropDown";
import { sleep } from "../../../../utils/timer";
import { TOGGLE_MODAL } from "../Reducer/ModalReducer";
import { SUPERVISOR_ACCESS } from "../../../../constants/acces";
import { isAllowedAction } from "../helper";

const ListItemTraffic = ({
  id,
  numero,
  offence,
  agent,
  date,
  amende,
  dispatchOpenModal,
}) => {
  let numeroFormat = numeral(numero);

  const [openMore, setOpenMore] = useState(false);
  const moreIconBtnRef = useRef();
  useEffect(() => {
    const closeDropDown = (e) => {
      const target = e.target;
      const moreIconDropdown = document.querySelector(".fluentMoreDopDown");
      if (!moreIconBtnRef.current.contains(target)) {
        sleep(100).then(() => {
          setOpenMore((current) => (current = false));
        });
      }
    };

    document.addEventListener("mousedown", closeDropDown);
    return () => document.removeEventListener("mousedown", closeDropDown);
  }, []);

  const handleRead = () => {
    return (
      !isAllowedAction(SUPERVISOR_ACCESS) &&
      dispatchOpenModal({
        type: TOGGLE_MODAL,
        payload: { view: "read-traffic", id },
      })
    );
  };

  const handleEdit = () => {
    setOpenMore((current) => (current = false));
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-traffic", id: id },
    });
  };

  const handleDelete = () => {
    setOpenMore((current) => (current = false));
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "delete-traffic", id: id },
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
                >
                  <FluentMoreCircleFill />
                </MoreIconBtn>
                <FluentMoreDropDown
                  isOpen={openMore}
                  editFunc={handleEdit}
                  deleteFunc={handleDelete}
                />
              </>
            )}
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
          <AmendItemView> {amende} $</AmendItemView>
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
  amende: PropTypes.number,
};

ListItemTraffic.defaultProps = {
  amende: 0,
  numero: 0,
  date: new Date(),
  offence: [],
};

export default ListItemTraffic;

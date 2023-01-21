import React, { useRef, useState, useEffect, useReducer } from "react";
import {
  AgentItemView,
  DateItemView,
  LieuxItemView,
  ListContainer,
  ListContent,
  MoreIconBtn,
  NumberView,
  RowIcon,
  TitleItemView,
} from "./ListViewItems.styled";
import numeral from "numeral";
import { dateForCivilListView } from "../../../../utils/dateFormat";
import { FluentMoreCircleFill } from "../../../../components/SVG";
import FluentMoreDropDown from "./FluentMoreDropDown";
import { sleep } from "../../../../utils/timer";
import moreActionReducer from "../Reducer/moreActionReducer";
import { TOGGLE_MODAL } from "../Reducer/ModalReducer";
import { isAllowedAction } from "../helper";
import { SUPERVISOR_ACCESS } from "../../../../constants/acces";

const ListItemAvertissement = ({
  id,
  lieux,
  numero,
  agent,
  date,
  comment,
  dispatchOpenModal,
}) => {
  let numeroFormat = numeral(numero);
  date = date || new Date();
  const [openMore, setOpenMore] = useState(false);

  const [MoreAction, dispatchMoreAction] = useReducer(moreActionReducer, {
    id: id,
    action: "",
    isOpen: false,
  });

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
        payload: { view: "read-avertissement", id },
      })
    );
  };

  const handleEdit = () => {
    setOpenMore((current) => (current = false));

    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-avertissement", id },
    });
  };

  const handleDelete = () => {
    setOpenMore((current) => (current = false));

    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "delete-avertissement", id },
    });
  };

  return (
    <ListContainer onClick={handleRead}>
      <ListContent>
        {
          <RowIcon>
            {" "}
            <NumberView className="text-end">
              N°{numeroFormat.format("000")}
            </NumberView>
            {isAllowedAction(SUPERVISOR_ACCESS) && (
              <>
                <MoreIconBtn
                  className="m-left-1 "
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
                />
              </>
            )}
          </RowIcon>
        }

        <TitleItemView>
          Fait à : <LieuxItemView>{lieux}</LieuxItemView>
        </TitleItemView>
        <p>{comment}</p>
        <AgentItemView>
          <span className="agent">Agent : </span> {agent}
        </AgentItemView>
        {<DateItemView> {dateForCivilListView(date)}</DateItemView>}
      </ListContent>
    </ListContainer>
  );
};

export default ListItemAvertissement;

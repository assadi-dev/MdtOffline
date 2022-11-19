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
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-avertissement", id },
    });
  };

  const handleDelete = () => {
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "delete-avertissement", id },
    });
  };

  const moreIconBtnRef = useRef();
  useEffect(() => {
    const closeDropDown = (e) => {
      const target = e.target;
      if (
        isAllowedAction(SUPERVISOR_ACCESS) &&
        !moreIconBtnRef.current.contains(target)
      ) {
        sleep(100).then(() => {
          setOpenMore(false);
        });
      }
    };

    isAllowedAction(SUPERVISOR_ACCESS) &&
      document.addEventListener("mousedown", closeDropDown);
    return () =>
      isAllowedAction(SUPERVISOR_ACCESS) &&
      document.removeEventListener("mousedown", closeDropDown);
  }, []);

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
                  onClick={() => setOpenMore(!openMore)}
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

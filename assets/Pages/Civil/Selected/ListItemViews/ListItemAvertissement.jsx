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
    id: "",
    action: "",
    isOpen: false,
  });

  const handleEdit = () => {
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-avertissement", id: id },
    });
  };

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
        <RowIcon>
          {" "}
          <NumberView className="text-end">
            N°{numeroFormat.format("000")}
          </NumberView>
          <MoreIconBtn
            className="m-left-1 "
            onClick={() => setOpenMore(!openMore)}
            ref={moreIconBtnRef}
          >
            <FluentMoreCircleFill />
          </MoreIconBtn>
          <FluentMoreDropDown isOpen={openMore} editFunc={handleEdit} />
        </RowIcon>

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

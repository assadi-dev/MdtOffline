import React, { useEffect, useState, useRef } from "react";
import { ButtonStyled } from "../../../../components/Shared/Buttons/Button.styled";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import { FluentMoreCircleFill } from "../../../../components/SVG";
import {
  AgentItemView,
  AmendItemView,
  ClotureButton,
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
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { enCloseArrestFolder } from "../../../../redux/actions/DossierArrestation.action";
import FluentMoreDropDown from "./FluentMoreDropDown";
import { sleep } from "../../../../utils/timer";
import { TOGGLE_MODAL } from "../Reducer/ModalReducer";

const ListItemDossierArrestaion = ({
  id,
  numero,
  amend,
  agent,
  date,
  peine,
  offence,
  isEnclosed,
  dispatchOpenModal,
}) => {
  let numeroFormat = numeral(numero);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthenticateReducer.token);

  const onEnclose = () => {
    dispatch(enCloseArrestFolder(id, token));
  };

  const handleEdit = () => {
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-dossier-d-arrestation", id: id },
    });
  };

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
            <FluentMoreDropDown isOpen={openMore} editFunc={handleEdit} />
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
          <UpListView>{peine}</UpListView>
        </RowListItemView>
      </ListContent>
      <div className="text-center">
        {isEnclosed ? (
          <p>Cloturé</p>
        ) : (
          <ClotureButton onClick={onEnclose}>CLOTURER</ClotureButton>
        )}
      </div>
    </ListContainer>
  );
};

ListItemDossierArrestaion.proptypes = {
  numero: PropTypes.number,
  offence: PropTypes.arrayOf(PropTypes.string),
  agent: PropTypes.string,
};

ListItemDossierArrestaion.defaultProps = {
  numero: 0,
  date: new Date(),
  offence: [],
  peine: "0:00:00",
  agent: "",
};

export default ListItemDossierArrestaion;

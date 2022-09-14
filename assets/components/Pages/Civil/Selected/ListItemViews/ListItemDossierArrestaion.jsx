import React from "react";
import { ButtonStyled } from "../../../../Shared/Buttons/Button.styled";
import ButtonDefault from "../../../../Shared/Buttons/ButtonDefault";
import { FluentMoreCircleFill } from "../../../../SVG";
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
import { dateForCivilListView } from "../../../../../utils/dateFormat";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { enCloseArrestFolder } from "../../../../../redux/actions/DossierArrestation.action";

const ListItemDossierArrestaion = ({
  id,
  numero,
  amend,
  agent,
  date,
  peine,
  offence,
  isEnclosed,
}) => {
  let numeroFormat = numeral(numero);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.AuthenticateReducer.token);

  const onEnclose = () => {
    dispatch(enCloseArrestFolder(id, token));
  };

  return (
    <ListContainer>
      <ListContent>
        <RowListItemView>
          <TicketView className="text-start">Ticket</TicketView>
          <RowIcon>
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

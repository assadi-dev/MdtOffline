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
import useListAgent from "../../../../hooks/useListAgent";
import { getAgentNameById } from "../../../../utils/userData";
import { SUPERVISOR_ACCESS } from "../../../../constants/acces";
import { isAllowedAction } from "../helper";
import { encloseAresstFolderAsync } from "../../../../features/DossierArrestation/DossierArrestationAsyncApi";
import { addRapportArrestationAsync } from "../../../../features/RapportArrestation/RapportArrestationAsyncApi";

const ListItemDossierArrestaion = ({
  id,
  numero,
  amende,
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
  const civilSelectore = useSelector((state) => state.CivilReducer);
  const listAgent = useListAgent();
  const agentData = useSelector((state) => state.AuthenticateReducer);
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

  const onEnclose = () => {
    // civilSelectore.selected,
    // getAgentNameById(listAgent, agentData.idAgent)
    dispatch(encloseAresstFolderAsync({ id }))
      .unwrap()
      .then((res) => {
        console.log(res);
        getAgentNameById(listAgent, agentData.idAgent);
        const civiData = civilSelectore.selected;
        const {
          infractions,
          lieux,
          entreeCellule,
          civil,
          amende,
          peine,
          idAgent,
          rapport,
        } = res;

        let createArrestReport = {
          infractions,
          lieux,
          entreeCellule,
          infractions,
          civil: `api/civils/${civil.id}`,
          amende: amende.toString(),
          peine,
          idAgent: Number(idAgent),
          arrestFolder: `api/arrest_folders/${id}`,
          conversionUp: false,
        };
        dispatch(addRapportArrestationAsync(createArrestReport));
      });
  };

  const handleEdit = () => {
    setOpenMore((current) => (current = false));
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "edit-dossier-d-arrestation", id },
    });
  };

  const handleDelete = () => {
    setOpenMore((current) => (current = false));
    return dispatchOpenModal({
      type: TOGGLE_MODAL,
      payload: { view: "delete-dossier-d-arrestation", id },
    });
  };

  const handleRead = () => {
    return (
      !isAllowedAction(SUPERVISOR_ACCESS) &&
      dispatchOpenModal({
        type: TOGGLE_MODAL,
        payload: { view: "read-dossier-d-arrestation", id },
      })
    );
  };

  return (
    <>
      <ListContainer onClick={handleRead}>
        <ListContent>
          <RowListItemView>
            <TicketView className="text-start">Ticket</TicketView>

            <RowIcon>
              <NumberView className="text-end">
                N°{numeroFormat.format("000")}
              </NumberView>
              {isAllowedAction(SUPERVISOR_ACCESS) && (
                <>
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
                    disabledEdit={isEnclosed}
                  />
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
            <AmendItemView> {amende} $ </AmendItemView>
            <UpListView>{peine}</UpListView>
          </RowListItemView>
        </ListContent>
        <div className="text-center">
          {isEnclosed ? (
            <p>Cloturé</p>
          ) : isAllowedAction(SUPERVISOR_ACCESS) ? (
            <ClotureButton onClick={onEnclose}>CLOTURER</ClotureButton>
          ) : null}
        </div>
      </ListContainer>
    </>
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

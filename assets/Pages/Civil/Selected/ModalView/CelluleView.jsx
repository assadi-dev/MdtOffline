import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_cellule } from "../../../../redux/actions/Cellule.action ";
import ButtonDefault from "../../../../components/Shared/Buttons/ButtonDefault";
import Input from "../../../../components/Shared/Input";
import CloseModalBtn from "../../../../components/Shared/Modal/CloseModal";
import ListCelluleItem from "../ListItemViews/ListCelluleItem";
import ListConvocationItem from "../ListItemViews/ListConvocationItem";
import {
  FooterCardTopButton,
  FooterSectionButton,
  FooterSectionSubmit,
  FormBodyToBtn,
  FormBodyTopBtn,
  FormLabel,
  HeadTitleView,
  RowCardTopButton,
  View,
} from "./ModalView.styled";
import { sendCelluleToDiscord } from "../SendDiscord/SendDiscord";
import { dateFrenchFormat } from "../../../../utils/dateFormat";
import { getAgentNameById } from "../../../../utils/userData";
import useListAgent from "../../../../hooks/useListAgent";
import { DOMAIN } from "../../../../constants/localStorage";
import Modal from "../../../../components/Shared/Modal";
import ReadRapportArrestationView from "../ListItemViews/ReadView/ReadRapportArrestationView";
import { ModalContainer } from "../../../../components/Shared/Modal/Modal.styled";

const CelluleView = ({ onClose, idCivil, listCellule, dispatchOpenModal }) => {
  const closeModal = () => {
    onClose();
  };

  const [rapportModal, setRapportModal] = useState({
    isOpen: false,
    id: undefined,
  });

  const agent = useSelector((state) => state.AuthenticateReducer);
  const civilSelectore = useSelector((state) => state.CivilReducer);
  const token = agent.token;
  const listAgent = useListAgent();

  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({
    agent: `${agent.matricule}-${agent.username}`,
    entree: "",
    sortie: "",
    civil: `api/civil/${idCivil}`,
    idAgent: agent.idAgent,
  });

  const handleChangeValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      entree: inputState.entree,
      sortie: inputState.sortie,
      agent: `${agent.matricule}-${agent.username}`,
      civil: `api/civils/${idCivil}`,
      idAgent: agent.idAgent,
    };
  };

  const handleRead = (id) => {
    setRapportModal((prevState) => ({
      ...prevState,
      id,
      isOpen: !prevState.isOpen,
    }));
  };

  const closeRapportModal = () => {
    setRapportModal((prevState) => ({
      ...prevState,
      id: undefined,
      isOpen: !prevState.isOpen,
    }));
  };

  return (
    <>
      <div>
        <HeadTitleView>
          <h2 className="titleView">CELLULE</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <RowCardTopButton>
          {listCellule.length
            ? listCellule.map((cellule) => (
                <ListCelluleItem
                  key={cellule.id}
                  id={cellule.id}
                  numero={cellule.arrestReport}
                  agent={getAgentNameById(listAgent, cellule.idAgent)}
                  entree={cellule.entree}
                  sortie={cellule.sortie}
                  idRapport={cellule.arrestReport}
                  readRapportModal={() => handleRead(cellule.arrestReport)}
                />
              ))
            : null}
        </RowCardTopButton>
      </div>
      <FooterCardTopButton></FooterCardTopButton>
      <ModalContainer isOpen={rapportModal.isOpen}>
        {rapportModal.id != undefined && (
          <View>
            {" "}
            <ReadRapportArrestationView
              id={rapportModal.id}
              onClose={closeRapportModal}
            />{" "}
          </View>
        )}
      </ModalContainer>
    </>
  );
};

export default CelluleView;

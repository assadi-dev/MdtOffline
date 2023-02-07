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
import ListPrisonItem from "../ListItemViews/ListPrisonItem";
import { ModalContainer } from "../../../../components/Shared/Modal/Modal.styled";
import ReadDossierArrestationView from "../ListItemViews/ReadView/ReadDossierArrestationView";

const PrisonView = ({ onClose, idCivil, listPrison }) => {
  const closeModal = () => {
    onClose();
  };

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

  const [dossierModal, setDossierModal] = useState({
    isOpen: false,
    id: undefined,
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
    setDossierModal((prevState) => ({
      ...prevState,
      id,
      isOpen: !prevState.isOpen,
    }));
  };

  const closeDossierModalModal = () => {
    setDossierModal((prevState) => ({
      ...prevState,
      id: undefined,
      isOpen: !prevState.isOpen,
    }));
  };

  return (
    <>
      <div>
        <HeadTitleView>
          <h2 className="titleView">PRISON / JAIL</h2>
          <CloseModalBtn className="closeBtn" onClick={closeModal} />
        </HeadTitleView>
        <RowCardTopButton>
          {listPrison.length
            ? listPrison.map((prison) => (
                <ListPrisonItem
                  key={prison.id}
                  id={prison.id}
                  numero={prison.arrestFolder}
                  agent={getAgentNameById(listAgent, prison.idAgent)}
                  entree={prison.entree}
                  sortie={prison.sortie}
                  idDossier={prison.arrestFolder}
                  readDossierModal={() => handleRead(prison.arrestFolder)}
                />
              ))
            : null}
        </RowCardTopButton>
      </div>
      <FooterCardTopButton></FooterCardTopButton>
      <ModalContainer isOpen={dossierModal.isOpen}>
        {dossierModal.id != undefined && (
          <View>
            {" "}
            <ReadDossierArrestationView
              id={dossierModal.id}
              onClose={closeDossierModalModal}
            />{" "}
          </View>
        )}
      </ModalContainer>
    </>
  );
};

export default PrisonView;

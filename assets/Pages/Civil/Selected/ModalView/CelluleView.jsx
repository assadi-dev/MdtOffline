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
} from "./ModalView.styled";
import { sendCelluleToDiscord } from "../SendDiscord/SendDiscord";
import { dateFrenchFormat } from "../../../../utils/dateFormat";
import { getAgentNameById } from "../../../../utils/userData";
import useListAgent from "../../../../hooks/useListAgent";
import { DOMAIN } from "../../../../constants/localStorage";

const CelluleView = ({ onClose, idCivil, listCellule }) => {
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
                  numero={cellule.id}
                  agent={getAgentNameById(listAgent, cellule.idAgent)}
                  entree={cellule.entree}
                  sortie={cellule.sortie}
                />
              ))
            : null}
        </RowCardTopButton>
      </div>
      <FooterCardTopButton></FooterCardTopButton>
    </>
  );
};

export default CelluleView;

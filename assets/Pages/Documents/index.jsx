import React, { useEffect, useMemo, useReducer } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../components/Shared/Modal";
import useFecthDataWithParams from "../../hooks/useFecthDataWithParams";
import { get_allRookie } from "../../redux/actions/Agents.action";
import {
  DocumentRowBtn,
  DocumentWrapper,
  SelectButton,
} from "./Document.styled";
import PlainteView from "./Modal/View/Plainte";
import RapportDeputyTrainyView from "./Modal/View/RapportDeputyTrainyView";
import ModalStateReducer, {
  CLOSE_MODAL,
  TOGGLE_MODAL,
  TOGGLE_RAPPORT_DEPUTY_TRAINY,
} from "./reducer/ModalStateReducer";

const Documents = () => {
  const [modalState, dispatchModal] = useReducer(ModalStateReducer, {
    isOpen: false,
    view: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_allRookie());
  }, []);

  const Render = ({ view }) => {
    switch (view) {
      case "rapportDeputyTrainy":
        return <RapportDeputyTrainyView onClose={() => toogleModal(view)} />;

      case "plainte":
        return <PlainteView onClose={() => toogleModal(view)} />;

      default:
        return null;
    }
  };

  const toogleModal = (view) => {
    dispatchModal({
      type: TOGGLE_MODAL,
      payload: { view },
    });
  };

  return (
    <DocumentWrapper>
      <DocumentRowBtn>
        <SelectButton onClick={() => toogleModal("rapportDeputyTrainy")}>
          Rapport Rookie / Deputy Trainee
        </SelectButton>
        <SelectButton onClick={() => toogleModal("plainte")}>
          Plainte
        </SelectButton>
      </DocumentRowBtn>
      <Modal isOpen={modalState.isOpen}>
        <>{<Render view={modalState.view} />}</>
      </Modal>
    </DocumentWrapper>
  );
};

export default Documents;

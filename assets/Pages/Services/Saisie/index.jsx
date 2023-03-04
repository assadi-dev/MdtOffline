import React, { useEffect, useReducer } from "react";
import {
  HeaderRowAction,
  SaisieTabBody,
  SaisieTabWrapper,
} from "./Saisie.style";
import { Button } from "../Service.styled";
import { Table } from "../../../components/Shared/Table/Table.styled";
import { IsCommandStaff } from "../../../utils/userData";
import { useDispatch, useSelector } from "react-redux";
import useTabAction from "./Hooks/useTabAction";
import ModalStateReducer from "./reducer/ModalStateReducer";
import Modal from "../../../components/Shared/Modal";
import { ButtonStyled } from "../../../components/Shared/Buttons/Button.styled";
import AddSaisieView from "./ModalView/AddSaisieView";

const Saisie = () => {
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.PlainteReducer
  );

  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "",
    data: null,
    isOpen: false,
  });

  const actionTabBtn = useTabAction(modalState, dispatchModalState);

  const addSaisie = () => {
    actionTabBtn.handleAddSaisie();
  };

  useEffect(() => {}, []);

  const Render = ({ view }) => {
    switch (view) {
      case "show-depot":
        return (
          <ShowBodyDepot
            closeModal={actionTabBtn.closeModal}
            textContent={modalState.data}
            title={"Raison du dépot"}
          />
        );

      case "add-saisie":
        return <AddSaisieView closeModal={actionTabBtn.closeModal} />;

      /*       case "show-corps-plaintes":
        return (
          <ShowBodyDocument
            closeModal={actionTabBtn.closeModal}
            textContent={modalState.data}
            title={"corp de la plainte"}
          />
        );
      case "delete-plainte":
        return (
          <DeletePlainteView
            id={modalState.data.id}
            raison={modalState.data.raison}
            closeModal={actionTabBtn.closeModal}
          />
        );

      case "edit-plainte":
        return (
          <EditPlainteView
            closeModal={actionTabBtn.closeModal}
            id={modalState.data.id}
          />
        ); */

      default:
        return null;
    }
  };

  return (
    <SaisieTabWrapper>
      <HeaderRowAction>
        <div></div>
        <div>
          {" "}
          <Button onClick={addSaisie}>Ajouter</Button>{" "}
        </div>
      </HeaderRowAction>
      <SaisieTabBody>
        <Table>
          <thead>
            <tr>
              <th>Agent</th>
              <th className="td-center">Date de saisie</th>
              <th className="td-center">Dépôt</th>
              {IsCommandStaff() && <th>Action</th>}
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </SaisieTabBody>
      <Modal isOpen={modalState.isOpen} onClose={actionTabBtn.closeModal}>
        <Render view={modalState.view} />
      </Modal>
    </SaisieTabWrapper>
  );
};

export default Saisie;

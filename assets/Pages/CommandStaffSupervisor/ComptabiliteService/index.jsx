import React, { useEffect, useMemo, useState, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputDateTimeFormat } from "../../../utils/dateFormat";

import {
  ComptabiliteServiceTabBody,
  ComptabiliteServiceTabWrapper,
  HeaderRowAction,
  ShowDocumentBtn,
} from "./Comptabilite.styled";
import { getAllAgentAsync } from "../../../features/Agents/AgentAsyncApi";
import {
  getAllDemandeComptabiliteAsync,
  getOneDemandeComptabiliteAsync,
} from "../../../features/DemandeComptabilite/DemandeComptabiliteAsyncApi";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import useListAgent from "../../../hooks/useListAgent";
import ModalStateReducer from "./reducer/ModalStateReducer";
import {
  OutlineBtnAction,
  Table,
  TableAction,
} from "../../../components/Shared/Table/Table.styled";
import {
  EditPencilIcon,
  SearchDocumentIcon,
  TrashIcon,
} from "../../../components/SVG";
import Modal from "../../../components/Shared/Modal";
import EmptyRow from "../../../components/Shared/Table/EmptyRow";
import useTabAction from "./Hooks/useTabAction";
import ShowRaison from "./ModalView/ShowRaison";
import EditDemandView from "./ModalView/EditDemandView";

const ComptabiliteServices = () => {
  const dispatch = useDispatch();
  const { collections, status, error, selected } = useSelector(
    (state) => state.DemandeComptabiliteReducer
  );

  const listAgent = useListAgent();
  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "",
    data: null,
    isOpen: false,
  });

  const actionTabBtn = useTabAction(modalState, dispatchModalState);

  useEffect(() => {
    const promise = dispatch(getAllDemandeComptabiliteAsync());
    const promise2 = dispatch(getAllAgentAsync());
    return () => {
      promise.abort();
      promise2.abort();
    };
  }, []);

  const demandeComptabilite = useMemo(() => {
    if (collections.length > 0) {
      return collections.map((demande) => ({
        id: demande.id,
        agent: demande.idAgent,
        date: `${inputDateTimeFormat(demande.date)}`,
        raison: demande.raison,
        montant: demande.montant,
      }));
    }
    return [];
  }, [collections]);

  const editDemand = (id) => {
    dispatch(getOneDemandeComptabiliteAsync({ id }));
    actionTabBtn.handleEdit(id);
  };

  const Render = ({ view }) => {
    switch (view) {
      case "show-raison":
        return (
          <ShowRaison
            closeModal={actionTabBtn.closeModal}
            textContent={modalState.data}
            title={"Raison de la demande"}
          />
        );

      case "add-sdemande":
        return <AddSaisieView closeModal={actionTabBtn.closeModal} />;

      case "delete-saisie":
        return (
          <ConfirmDelete
            id={modalState.data.id}
            depot={modalState.data.depot}
            closeModal={actionTabBtn.closeModal}
          />
        );

      case "edit-demande":
        return (
          <EditDemandView
            closeModal={actionTabBtn.closeModal}
            id={modalState.data.id}
          />
        );

      default:
        return null;
    }
  };

  return (
    <ComptabiliteServiceTabWrapper>
      <HeaderRowAction></HeaderRowAction>
      <ComptabiliteServiceTabBody>
        <Table>
          <thead>
            <tr>
              <th className="td-start">Agent</th>
              <th className="td-center">Date de la demande</th>
              <th className="td-center">Raison</th>
              <th className="td-center">Montant</th>
              {IsCommandStaff() && <th className="td-center">Action</th>}
            </tr>
          </thead>
          {status == "complete" && (
            <tbody>
              {demandeComptabilite.length > 0 ? (
                demandeComptabilite.map((demande) => (
                  <tr key={demande.id}>
                    <td className="td-start">
                      {getAgentNameById(listAgent, demande.agent)}
                    </td>
                    <td className="td-center">{demande.date}</td>
                    <td className="td-center">
                      <ShowDocumentBtn
                        title="Afficher la raison de la demande"
                        onClick={() =>
                          actionTabBtn.handleShowRaison(demande.raison)
                        }
                      >
                        <SearchDocumentIcon />
                      </ShowDocumentBtn>
                    </td>
                    <td className="td-center">{demande.montant}</td>
                    {IsCommandStaff && (
                      <td>
                        <TableAction>
                          <OutlineBtnAction
                            className="edit"
                            onClick={() => {
                              editDemand(demande.id);
                            }}
                          >
                            <EditPencilIcon />
                          </OutlineBtnAction>
                          <OutlineBtnAction
                            className="delete"
                            onClick={() =>
                              actionTabBtn.handleDelete(
                                demande.id,
                                demande.raison
                              )
                            }
                          >
                            <TrashIcon />
                          </OutlineBtnAction>
                        </TableAction>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <EmptyRow
                  message={"Aucune demande de enregistrée"}
                  colSpan={6}
                />
              )}
            </tbody>
          )}
        </Table>
      </ComptabiliteServiceTabBody>

      <Modal isOpen={modalState.isOpen} onClose={actionTabBtn.closeModal}>
        <Render view={modalState.view} />
      </Modal>
    </ComptabiliteServiceTabWrapper>
  );
};

export default ComptabiliteServices;

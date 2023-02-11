import React, { useEffect, useReducer, useState } from "react";
import {
  HeaderRowAction,
  PlainteTabBody,
  PlainteTabWrapper,
} from "./PlaintTab.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  OutlineBtnAction,
  Table,
  TableAction,
} from "../../../components/Shared/Table/Table.styled";
import { IsCommandStaff } from "../../../utils/userData";
import { getAllPlaintesAsync } from "../../../features/Plaintes/PlaintesAsyncApi";
import EmptyRow from "../../../components/Shared/Table/EmptyRow";
import { FrenchFormatDateWithHour } from "../../../utils/dateFormat";
import {
  EditPencilIcon,
  SearchDocumentIcon,
  TrashIcon,
} from "../../../components/SVG";
import { ShowDocumentBtn } from "../Service.styled";
import ModalStateReducer from "./reducer/ModalStateReducer";
import Modal from "../../../components/Shared/Modal";
import useTabAction from "./Hooks/useTabAction";
import ShowBodyDocument from "../Modal/ShowBodyDocument";
import DeletePlainteView from "./ModalView/DeletePlainteView";
import EditPlainteView from "./ModalView/EditPlainteView";

const PlaintesTab = () => {
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

  useEffect(() => {
    dispatch(getAllPlaintesAsync());
  }, []);

  const Render = ({ view }) => {
    switch (view) {
      case "show-raison":
        return (
          <ShowBodyDocument
            closeModal={actionTabBtn.closeModal}
            textContent={modalState.data}
            title={"Raison du dépot"}
          />
        );
      case "show-corps-plaintes":
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
        );

      default:
        return null;
    }
  };

  return (
    <PlainteTabWrapper>
      <HeaderRowAction>
        <div></div>
        <div></div>
      </HeaderRowAction>
      <PlainteTabBody>
        <Table>
          <thead>
            <tr>
              <th>Dépositaire</th>
              <th>Incriminé</th>
              <th className="td-center">Raison du dépot</th>
              <th className="td-center">Corps de la plainte</th>
              <th className="td-center">Date</th>
              {IsCommandStaff() && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {collections.length > 0 ? (
              collections.map((plainte) => (
                <tr key={plainte.id}>
                  <td>{plainte.nomDepositaire}</td>
                  <td>{plainte.nomIncrimine}</td>
                  <td className="td-center">
                    <ShowDocumentBtn
                      title="Afficher la raisont du depot"
                      onClick={() =>
                        actionTabBtn.handleShowRaison(plainte.raisonDepot)
                      }
                    >
                      <SearchDocumentIcon />
                    </ShowDocumentBtn>
                  </td>
                  <td className="td-center">
                    <ShowDocumentBtn
                      title="Afficher le corp de la plainte"
                      onClick={() =>
                        actionTabBtn.handleShowCorpsPlaintes(
                          plainte.corpsPlainte
                        )
                      }
                    >
                      <SearchDocumentIcon />
                    </ShowDocumentBtn>
                  </td>
                  <td className="td-center">
                    {FrenchFormatDateWithHour(plainte.createdAt)}
                  </td>
                  {IsCommandStaff && (
                    <td>
                      <TableAction>
                        <OutlineBtnAction
                          className="edit"
                          onClick={() => actionTabBtn.handleEdit(plainte.id)}
                        >
                          <EditPencilIcon />
                        </OutlineBtnAction>
                        <OutlineBtnAction
                          className="delete"
                          onClick={() =>
                            actionTabBtn.handleDelete(
                              plainte.id,
                              plainte.raisonDepot
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
              <EmptyRow message={"Aucune plainte deposé"} colSpan={7} />
            )}
          </tbody>
        </Table>
      </PlainteTabBody>
      <Modal isOpen={modalState.isOpen} onClose={actionTabBtn.closeModal}>
        <Render view={modalState.view} />
      </Modal>
    </PlainteTabWrapper>
  );
};

export default PlaintesTab;

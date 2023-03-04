import React, { useEffect, useReducer } from "react";
import {
  HeaderRowAction,
  SaisieTabBody,
  SaisieTabWrapper,
} from "./Saisie.style";
import { Button, ShowDocumentBtn } from "../Service.styled";
import {
  OutlineBtnAction,
  Table,
  TableAction,
} from "../../../components/Shared/Table/Table.styled";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import { useDispatch, useSelector } from "react-redux";
import useTabAction from "./Hooks/useTabAction";
import ModalStateReducer from "./reducer/ModalStateReducer";
import Modal from "../../../components/Shared/Modal";
import { ButtonStyled } from "../../../components/Shared/Buttons/Button.styled";
import AddSaisieView from "./ModalView/AddSaisieView";
import {
  getAllSaisiesAsync,
  getOneSaisiesAsync,
} from "../../../features/Saisie/SaisieAsyncApi";
import EmptyRow from "../../../components/Shared/Table/EmptyRow";
import {
  EditPencilIcon,
  SearchDocumentIcon,
  TrashIcon,
} from "../../../components/SVG";
import { inputDateTimeFormat } from "../../../utils/dateFormat";
import useListAgent from "../../../hooks/useListAgent";
import ShowDepot from "./ModalView/ShowDepot";
import ConfirmDelete from "./ModalView/ConfirmDelete";
import EditSaisieView from "./ModalView/EditSaisieView";

const Saisie = () => {
  const dispatch = useDispatch();
  const { collections, status, error } = useSelector(
    (state) => state.SaisieReducer
  );
  const listAgent = useListAgent();
  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "",
    data: null,
    isOpen: false,
  });

  const actionTabBtn = useTabAction(modalState, dispatchModalState);

  const addSaisie = () => {
    actionTabBtn.handleAddSaisie();
  };

  const editSaisie = (id) => {
    actionTabBtn.handleEdit(id);
    dispatch(getOneSaisiesAsync({ id }));
  };

  useEffect(() => {
    let promiseSaisie = null;
    promiseSaisie = dispatch(getAllSaisiesAsync());
    return () => {
      promiseSaisie && promiseSaisie.abort();
    };
  }, []);

  const Render = ({ view }) => {
    switch (view) {
      case "show-depot":
        return (
          <ShowDepot
            closeModal={actionTabBtn.closeModal}
            textContent={modalState.data}
            title={"Dépôt"}
          />
        );

      case "add-saisie":
        return <AddSaisieView closeModal={actionTabBtn.closeModal} />;

      case "delete-saisie":
        return (
          <ConfirmDelete
            id={modalState.data.id}
            depot={modalState.data.depot}
            closeModal={actionTabBtn.closeModal}
          />
        );

      case "edit-saisie":
        return (
          <EditSaisieView
            closeModal={actionTabBtn.closeModal}
            id={modalState.data.id}
          />
        );

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
        {status == "complete" && (
          <Table>
            <thead>
              <tr>
                <th>Agent</th>
                <th className="td-center">Date de saisie</th>
                <th className="td-center">Poste</th>
                <th className="td-center">Dépôt</th>
                {IsCommandStaff() && <th className="td-center">Action</th>}
              </tr>
            </thead>
            <tbody>
              {collections.length == 0 ? (
                <EmptyRow message={"Aucun saisie déposé"} colSpan={6} />
              ) : (
                collections.map((saisie) => (
                  <tr key={saisie.id}>
                    <td>{getAgentNameById(listAgent, saisie.idAgent)}</td>

                    <td className="td-center">
                      {inputDateTimeFormat(saisie.depositAt)}
                    </td>
                    <td className="td-center">{saisie.poste}</td>
                    <td className="td-center">
                      <ShowDocumentBtn
                        title="Afficher les objets saisie"
                        onClick={() =>
                          actionTabBtn.handleShowDepot(saisie.depot)
                        }
                      >
                        <SearchDocumentIcon />
                      </ShowDocumentBtn>
                    </td>
                    {IsCommandStaff && (
                      <td>
                        <TableAction>
                          <OutlineBtnAction
                            className="edit"
                            onClick={() => {
                              editSaisie(saisie.id);
                            }}
                          >
                            <EditPencilIcon />
                          </OutlineBtnAction>
                          <OutlineBtnAction
                            className="delete"
                            onClick={() =>
                              actionTabBtn.handleDelete(saisie.id, saisie.depot)
                            }
                          >
                            <TrashIcon />
                          </OutlineBtnAction>
                        </TableAction>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </SaisieTabBody>
      <Modal isOpen={modalState.isOpen} onClose={actionTabBtn.closeModal}>
        <Render view={modalState.view} />
      </Modal>
    </SaisieTabWrapper>
  );
};

export default Saisie;

import React, { useEffect, useReducer } from "react";
import {
  HeaderRowAction,
  OutlineBtnAction,
  RapportRookieBody,
  RapportRookieWrapper,
  ShowRapportbtn,
  Table,
  TableAction,
} from "./RapportRookie.styled";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import { useDispatch, useSelector } from "react-redux";
import { getAllRapportRookieAsync } from "../../../features/RapportRookie/RapportRookieAsyncApi";
import { FrenchFormatDateWithHour } from "../../../utils/dateFormat";
import useListAgent from "../../../hooks/useListAgent";
import {
  EditPencilIcon,
  SearchDocumentIcon,
  TrashIcon,
} from "../../../components/SVG";
import ShowRapportRookie from "./Modal/ShowRapportRookie";
import ModalStateReducer from "./reducer/ModalStateReducer";
import Modal from "../../../components/Shared/Modal";
import EditRapportRokie from "./Modal/EditRapportRokie";
import DeleteRapportRookie from "./Modal/DeleteRapportRookie";

const RapportRookieTab = () => {
  const dispatch = useDispatch();
  const rapportRookie = useSelector(
    (state) => state.RapportDeputyTrainyReducer
  );
  const listAgent = useListAgent();

  useEffect(() => {
    const promise = dispatch(getAllRapportRookieAsync());
    return () => {
      promise.abort();
    };
  }, []);

  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "",
    data: null,
    isOpen: false,
  });

  const toggleModal = (view, data) => {
    let payload = { view, data };
    dispatchModalState({ type: "TOOGLE_MODAL", payload });
  };

  const closeModal = () => {
    dispatchModalState({
      type: "CLOSE_MODAL",
      payload: { view: modalState.view, data: modalState.data },
    });
  };

  const Render = ({ view, data }) => {
    switch (view) {
      case "show-rapport":
        return <ShowRapportRookie closeModal={closeModal} rapport={data} />;
      case "edit-rapport":
        return <EditRapportRokie closeModal={closeModal} id={data.id} />;
      case "delete-rapport":
        return (
          <DeleteRapportRookie
            closeModal={closeModal}
            id={data.id}
            rapport={data.rapport}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <RapportRookieWrapper>
        <HeaderRowAction>
          <div></div>
        </HeaderRowAction>
        <RapportRookieBody>
          {rapportRookie.status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th> Deputy Trainee concerné</th>
                  <th>Type de patrouille</th>
                  <th className="td-center">Rapport</th>
                  {IsCommandStaff() && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {rapportRookie.collections.length > 0 ? (
                  rapportRookie.collections.map((rapport) => (
                    <tr key={rapport.id}>
                      <td>{FrenchFormatDateWithHour(rapport.createdAt)}</td>
                      <td>
                        {getAgentNameById(
                          listAgent,
                          parseInt(rapport.deputyTrainyConcerned)
                        )}
                      </td>
                      <td>{rapport.typePatrouille}</td>
                      <td className="td-center">
                        <ShowRapportbtn
                          title="Afficher le rapport"
                          onClick={() =>
                            toggleModal("show-rapport", rapport.rapport)
                          }
                        >
                          <SearchDocumentIcon />
                        </ShowRapportbtn>
                      </td>
                      {IsCommandStaff() && (
                        <td className="td-center">
                          {" "}
                          <TableAction>
                            <OutlineBtnAction
                              className="edit"
                              onClick={() =>
                                toggleModal("edit-rapport", {
                                  id: rapport.id,
                                })
                              }
                            >
                              <EditPencilIcon />
                            </OutlineBtnAction>
                            <OutlineBtnAction
                              className="delete"
                              onClick={() =>
                                toggleModal("delete-rapport", {
                                  id: rapport.id,
                                  rapport: rapport.rapport,
                                })
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
                  <tr>
                    {" "}
                    <td colSpan={5} className="td-center">
                      Aucun Rapport Rookie
                    </td>{" "}
                  </tr>
                )}
              </tbody>
            </Table>
          ) : (
            "Loading"
          )}
        </RapportRookieBody>
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <Render view={modalState.view} data={modalState.data} />
        </Modal>
      </RapportRookieWrapper>
    </>
  );
};

export default RapportRookieTab;

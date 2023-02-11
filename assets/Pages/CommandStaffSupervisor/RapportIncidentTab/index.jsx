import React, { useEffect, useReducer } from "react";
import {
  RapportIncidentBody,
  RapportIncidentWrapper,
  ShowRapportbtn,
} from "./RapportIncident.styled";
import {
  HeaderRowAction,
  OutlineBtnAction,
  Table,
  TableAction,
} from "../CommandStaffSupervisor.styled";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import Modal from "../../../components/Shared/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllRaportIncidentAsync } from "../../../features/RapportIncident/RapportIncidentAsyncApi";
import {
  FrenchFormatDate,
  FrenchFormatDateWithHour,
  obtainDate,
} from "../../../utils/dateFormat";
import useListAgent from "../../../hooks/useListAgent";
import {
  EditPencilIcon,
  Eyes,
  SearchDocumentIcon,
  TrashIcon,
} from "../../../components/SVG";
import ModalStateReducer from "./reducer/ModalStateReducer";
import ShowRapportIncident from "./Modal/ShowRapportIncident";
import EditRapportRokie from "../../PoliceAcademy/RapportRookie/Modal/EditRapportRokie";
import DeleteRapportIncident from "./Modal/DeleteRapportIncident";
import EditRapportIncident from "./Modal/EditRapportIncident";
import EmptyRow from "../../../components/Shared/Table/EmptyRow";

const RapportIncidentTab = () => {
  const dispatch = useDispatch();
  const listAgent = useListAgent();
  const rapportIncidentSelector = useSelector(
    (state) => state.RapportIncidentReducer
  );

  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "",
    data: null,
    isOpen: false,
  });

  useEffect(() => {
    const promise = dispatch(getAllRaportIncidentAsync());
    return () => {
      promise.abort();
    };
  }, []);

  const Render = ({ view, data }) => {
    switch (view) {
      case "show-rapport":
        return <ShowRapportIncident closeModal={closeModal} rapport={data} />;
      case "edit-rapport":
        return <EditRapportIncident closeModal={closeModal} id={data.id} />;
      case "delete-rapport":
        return (
          <DeleteRapportIncident
            id={data.id}
            closeModal={closeModal}
            rapport={data.rapport}
          />
        );

      default:
        return null;
    }
  };

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

  return (
    <>
      <RapportIncidentWrapper>
        <HeaderRowAction>
          <div></div>
        </HeaderRowAction>
        <RapportIncidentBody>
          {rapportIncidentSelector.status == "complete" ? (
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>officier</th>
                  <th>Type</th>
                  <th>lieu</th>
                  <th className="td-center">Rapport</th>
                  {IsCommandStaff() && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {rapportIncidentSelector.collections.length > 0 ? (
                  rapportIncidentSelector.collections.map((rapport) => (
                    <tr key={rapport.id}>
                      <td>{FrenchFormatDateWithHour(rapport.createdAt)}</td>
                      <td>{getAgentNameById(listAgent, rapport.idAgent)}</td>
                      <td>{rapport.typeIncident}</td>
                      <td>{rapport.lieuxIncident}</td>
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
                  <EmptyRow message={"Rapport Incient vide"} colSpan={7} />
                )}
              </tbody>
            </Table>
          ) : (
            "loading  "
          )}
        </RapportIncidentBody>
        <Modal isOpen={modalState.isOpen} onClose={closeModal}>
          <Render view={modalState.view} data={modalState.data} />
        </Modal>
      </RapportIncidentWrapper>
    </>
  );
};

export default RapportIncidentTab;

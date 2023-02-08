import React, { useEffect, useReducer } from "react";
import {
  RapportIncidentBody,
  RapportIncidentWrapper,
  ShowRapportbtn,
} from "./RapportIncident.styled";
import { HeaderRowAction, Table } from "../CommandStaffSupervisor.styled";
import { IsCommandStaff, getAgentNameById } from "../../../utils/userData";
import Modal from "../../../components/Shared/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllRaportIncidentAsync } from "../../../features/RapportIncident/RapportIncidentAsyncApi";
import { FrenchFormatDate, obtainDate } from "../../../utils/dateFormat";
import useListAgent from "../../../hooks/useListAgent";
import { Eyes, SearchDocumentIcon } from "../../../components/SVG";
import ModalStateReducer from "./reducer/ModalStateReducer";
import ShowRapportIncident from "./Modal/ShowRapportIncident";

const RapportIncidentTab = () => {
  const dispatch = useDispatch();
  const listAgent = useListAgent();
  const rapportIncidentSelector = useSelector(
    (state) => state.RapportIncidentReducer
  );

  const [modalState, dispatchModalState] = useReducer(ModalStateReducer, {
    view: "show-rapport",
    data: null,
    isOpen: true,
  });

  //console.log(listAgent);
  useEffect(() => {
    const promise = dispatch(getAllRaportIncidentAsync());
    return () => {
      promise.abort();
    };
  }, []);

  const Render = ({ view, data }) => {
    switch (view) {
      case "show-rapport":
        return <ShowRapportIncident />;
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
                  <th>lieu</th>
                  <th className="td-center">Rapport</th>
                  {IsCommandStaff() && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {rapportIncidentSelector.collections.length > 0 &&
                  rapportIncidentSelector.collections.map((rapport) => (
                    <tr key={rapport.id}>
                      <td>{FrenchFormatDate(rapport.createdAt)}</td>
                      <td>{getAgentNameById(listAgent, rapport.idAgent)}</td>
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
                        <td className="td-center">action</td>
                      )}
                    </tr>
                  ))}
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

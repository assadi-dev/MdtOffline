import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchButton from "../../../components/Shared/SwitchButton";
import { ChevronLeft, ChevronRight } from "../../../components/SVG";
import { updateIsPaidService } from "../../../redux/actions/PriseDeService.action";
import {
  FormatDuration,
  getCurrentWeekNumber,
} from "../../../utils/dateFormat";
import { Table } from "../../Civil/Selected/EditTable/JusticeEditTable.styled";
import { HeaderRowAction } from "../CommandStaffSupervisor.styled";
import {
  ComptabiliteBody,
  ComptabiliteWrapper,
  HoursSheetHeaderRowBtn,
} from "./Comptabilite.styled";
import {
  getIsServiceActive,
  getIsServicePaid,
  getServicebyWeek,
  getTotalHourByWeek,
} from "./helper";
import ServiceState from "./ServiceState";
import { getAllAgentAsync } from "../../../features/Agents/AgentAsyncApi";
import { getAllGradesAsync } from "../../../features/Grades/GradeAsyncApi";
import { updateisPaidService } from "../../../features/Agents/AgentApi";

const ComptabilitePriseDeService = () => {
  const dispatch = useDispatch();
  const AgentsSelector = useSelector((state) => state.AgentsReducer);
  const [week, setWeek] = useState(parseInt(getCurrentWeekNumber()));

  const [paidState, setPaidState] = useState(false);

  const handleCheckPayement = (id, e) => {
    let checkState = e.target.checked;

    let currenAgent = AgentsSelector.collections.find(
      (agent) => agent.id == id
    );
    let servicesOfWeek = getServicebyWeek(currenAgent, week);
    let submitServicesOfWeek = {
      idAgent: id,
      week,
      priseServiceByWeek: servicesOfWeek,
      paidValue: servicesOfWeek.length > 0 ? checkState : false,
    };
    //dispatch(updateIsPaidServiceAsync(submitServicesOfWeek));
    updateisPaidService(dispatch, submitServicesOfWeek);
  };

  const setWeekCounter = (type) => {
    type == "increment"
      ? setWeek((prevState) => (prevState += 1))
      : setWeek((prevState) => (prevState -= 1));
  };

  useEffect(() => {
    const promise = dispatch(getAllAgentAsync());
    const promise2 = dispatch(getAllGradesAsync());
    return () => {
      promise.abort();
      promise2.abort();
    };
  }, [week]);

  const agents = useMemo(() => {
    if (AgentsSelector.collections.length > 0) {
      return AgentsSelector.collections.map((agent) => ({
        id: agent.id,
        nom: `${agent.name}`,
        matricule: agent.matricule,
        grade: agent.grade.nom,
        totalDuration: getTotalHourByWeek(agent, week),
        serviceStatus: getIsServiceActive(agent, week) ? "actif" : "inactif",
        paidStatus: getIsServicePaid(agent, week),
      }));
    }
    return [];
  }, [week, AgentsSelector.collections]);

  return (
    <div>
      <ComptabiliteWrapper>
        <HoursSheetHeaderRowBtn>
          <button className="btn" onClick={() => setWeekCounter("decrement")}>
            <ChevronLeft />
          </button>{" "}
          <h2 className="HoursTitlepageHeader">SEMAINE {week}</h2>{" "}
          <button className="btn" onClick={() => setWeekCounter("increment")}>
            <ChevronRight />{" "}
          </button>
        </HoursSheetHeaderRowBtn>
        <HeaderRowAction></HeaderRowAction>
        <ComptabiliteBody>
          <Table>
            <thead>
              <tr>
                <th className="td-start">Agent</th>
                <th className="td-center">Matricule</th>
                <th className="td-center">Grade</th>
                <th className="td-center">durée total</th>
                <th className="td-center">Service</th>
                <th className="td-center">Payé</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id}>
                  <td className="td-start">{agent.nom}</td>
                  <td className="td-center">{agent.matricule}</td>
                  <td className="td-center">{agent.grade}</td>
                  <td className="td-center">
                    {FormatDuration(agent.totalDuration)}
                  </td>
                  <td className="td-center">
                    <ServiceState status={agent.serviceStatus} />{" "}
                  </td>
                  <td className="td-center">
                    {" "}
                    <SwitchButton
                      checked={agent.paidStatus}
                      sliderOffColor={"var( --danger-color)"}
                      sliderClass="validatSwitchBtn"
                      onChange={(e) => handleCheckPayement(agent.id, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ComptabiliteBody>
      </ComptabiliteWrapper>
      {/*       <Modal isOpen={modalState.isOpen}>
        <>
          {
            <Render
              view={modalState.view}
              data={modalState.params}
              onClose={handleClose}
            />
          }
        </>
      </Modal> */}
    </div>
  );
};

export default ComptabilitePriseDeService;

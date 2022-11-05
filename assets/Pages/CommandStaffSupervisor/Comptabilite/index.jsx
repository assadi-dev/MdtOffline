import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchButton from "../../../components/Shared/SwitchButton";
import { ChevronLeft, ChevronRight } from "../../../components/SVG";
import { get_allAgent } from "../../../redux/actions/Agents.action";
import { get_allGrades } from "../../../redux/actions/Grades.action";
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
import { getIsServiceActive, getTotalHourByWeek } from "./helper";
import ServiceState from "./ServiceState";

const Comptabilite = () => {
  const dispatch = useDispatch();
  const AgentsSelector = useSelector((state) => state.AgentsReducer);
  const [week, setWeek] = useState(parseInt(getCurrentWeekNumber()));

  const handleCheckPayement = (id, e) => {
    let checkState = e.target.checked;
    let data = { payement: checkState };
    // dispatch(validation_user(id, data));
  };

  const setWeekCounter = (type) => {
    type == "increment"
      ? setWeek((prevState) => (prevState += 1))
      : setWeek((prevState) => (prevState -= 1));
  };

  useEffect(() => {
    dispatch(get_allAgent());
    dispatch(get_allGrades());
  }, [week]);

  const agents = useMemo(() => {
    if (AgentsSelector.collections.length > 0) {
      return AgentsSelector.collections.map((agent) => ({
        nom: `${agent.name}`,
        matricule: agent.matricule,
        grade: agent.grade.nom,
        totalDuration: getTotalHourByWeek(agent, week),
        serviceStatus: getIsServiceActive(agent, week) ? "actif" : "inactif",
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
                <tr>
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
                      checked={false}
                      sliderOffColor={"var( --danger-color)"}
                      sliderClass="validatSwitchBtn"
                      onChange={(e) => handleCheckPayement(10, e)}
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

export default Comptabilite;

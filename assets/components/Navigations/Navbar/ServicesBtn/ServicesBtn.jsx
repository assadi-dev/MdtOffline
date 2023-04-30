import React, { useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_priseServices,
  edit_priseServices,
  get_lastActiveService,
} from "../../../../redux/actions/PriseDeService.action";
import {
  getCurrentWeekNumber,
  getDuration,
  getWeekNumber,
} from "../../../../utils/dateFormat";
import { PlayFilled, PlayOutline } from "../../../SVG";
import { ServiceButton } from "./ServicesBtn.styled";
import {
  addServiceAsync,
  editServiceAsync,
  getLastActiveServiceAsync,
} from "../../../../features/PriseDeService/PriseDeserviceAsyncApi";
import { addSeeviceBtn } from "../../../../features/PriseDeService/PriseDeService.slice";
import { generateAgentCard } from "../../../../features/Dispatch/Dispatch.slice";

const ServicesBtn = () => {
  const agent = useSelector((state) => state.AuthenticateReducer);
  const serviceSelector = useSelector((state) => state.PriseDeServiceReducer);
  const dispatch = useDispatch();

  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    let promise = null;
    if (agent.idAgent) {
      let payload = { agent: agent.idAgent };
      promise = dispatch(getLastActiveServiceAsync(payload));
    }
    return () => {
      if (agent.idAgent) promise.abort();
    };
  }, [agent.idAgent]);

  const activeService = () => {
    const dt = new Date();
    let servicesValues = {
      week: getCurrentWeekNumber(dt).toString(),
      start: dt,
      duration: getDuration(dt.toString(), dt.toString()),
      idAgent: agent.idAgent,
      agent: `/api/agents/${agent.idAgent}`,
      isActive: true,
    };

    dispatch(addServiceAsync(servicesValues));
    console.log(agent);
    let currentGrade = agent.grade.nom;
    let currentmatricule = agent.matricule ? agent.matricule : "N/A";
    let agentCard = {
      grade: currentGrade,
      username: agent.username,
      matricule: currentmatricule,
    };
    dispatch(generateAgentCard(agentCard));
  };

  const endService = () => {
    const dt = new Date();
    let servicesValues = {
      duration: getDuration(currentService.start.toString(), dt.toString()),
      end: dt,
      isActive: false,
    };

    let payload = { id: currentService.id, data: servicesValues };

    dispatch(editServiceAsync(payload));
  };

  const toggleOnService = () => {
    setToggleButton((prevState) => !prevState);
    if (!toggleButton) {
      activeService();
    } else {
      endService();
    }
  };

  const currentService = useMemo(() => {
    if (
      serviceSelector.selected !== undefined ||
      serviceSelector.selected != null
    ) {
      if (serviceSelector.selected.isActive) setToggleButton(true);

      return serviceSelector.selected;
    }

    return [];
  }, [serviceSelector.selected]);

  return (
    <>
      {" "}
      <ServiceButton active={toggleButton} onClick={toggleOnService}>
        {toggleButton ? <PlayFilled /> : <PlayOutline />}
      </ServiceButton>
    </>
  );
};

export default ServicesBtn;

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

const ServicesBtn = () => {
  const agent = useSelector((state) => state.AuthenticateReducer);
  const serviceSelector = useSelector((state) => state.PriseDeServiceReducer);
  const dispatch = useDispatch();

  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    dispatch(get_lastActiveService(agent.idAgent));
  }, []);

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

    dispatch(add_priseServices(servicesValues));
  };

  const endService = () => {
    const dt = new Date();
    let servicesValues = {
      duration: getDuration(currentService.start.toString(), dt.toString()),
      end: dt,
      isActive: false,
    };
    console.log(servicesValues);
    dispatch(edit_priseServices(currentService.id, servicesValues));
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

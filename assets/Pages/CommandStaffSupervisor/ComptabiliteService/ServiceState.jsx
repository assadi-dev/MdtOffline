import React from "react";
import { ServiceStateText } from "./Comptabilite.styled";

const ServiceState = ({ status }) => {
  const text = status == "actif" ? "En service" : "Pas en service";
  const active = status == "actif" ? true : false;

  return <ServiceStateText isActive={active}>{text}</ServiceStateText>;
};

export default ServiceState;

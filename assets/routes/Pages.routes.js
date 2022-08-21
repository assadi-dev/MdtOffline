import React from "react";
import Services from "../components/Pages/Services";
import MDT from "../components/Pages/MDT";
import SeniorLeadOfficier from "../components/Pages/SeniorLeadOfficier";
import PoliceAcademy from "../components/Pages/PoliceAcademy";
import CommandStaffSupervisor from "../components/Pages/CommandStaffSupervisor";
import Compte from "../components/Pages/Compte";
import Reglage from "../components/Pages/Reglage";
import Civil from "../components/Pages/Civil";
import Documents from "../components/Pages/Documents";
import PanicButton from "../components/Pages/PanicButton";
import RapportIncident from "../components/Pages/RapportIncident";
import CivilSelected from "../components/Pages/Civil/Selected/Selected";

export default [
  { label: "Services", path: "services", element: <Services /> },
  {
    label: "MDT",
    path: "mdt",
    element: <MDT />,
    subNavigation: [
      { label: "Civil", path: "civil", element: <Civil /> },
      { label: "Documents", path: "documents", element: <Documents /> },
      {
        label: "Pannic Button",
        path: "panic-button",
        element: <PanicButton />,
      },
      {
        label: "Rapport d'incident",
        path: "rapport-d-incident",
        element: <RapportIncident />,
      },
    ],
  },
  { label: "Civil", path: "civil/:slug", element: <CivilSelected /> },
  {
    label: "Senior Lead Officier",
    path: "senior-lead-officier",
    element: <SeniorLeadOfficier />,
  },
  {
    label: "Police Academy",
    path: "police-academy",
    element: <PoliceAcademy />,
  },
  {
    label: "Command Staff Supervisor",
    path: "command-staff-supervisor",
    element: <CommandStaffSupervisor />,
  },
  {
    label: "Mon Compte",
    path: "compte",
    element: <Compte />,
  },
  {
    label: "Mes Reglages",
    path: "reglages",
    element: <Reglage />,
  },
];

import React from "react";
import Services from "../Pages/Services";
import MDT from "../Pages/MDT";
import SeniorLeadOfficier from "../Pages/SeniorLeadOfficier";
import PoliceAcademy from "../Pages/PoliceAcademy";
import CommandStaffSupervisor from "../Pages/CommandStaffSupervisor";
import Compte from "../Pages/Compte";
import Reglage from "../Pages/Reglage";
import Civil from "../Pages/Civil";
import Documents from "../Pages/Documents";
import PanicButton from "../Pages/PanicButton";
import RapportIncident from "../Pages/RapportIncident";
import CivilSelected from "../Pages/Civil/Selected/Selected";
import AccountManager from "../Pages/CommandStaffSupervisor/AcountManager";

export default [
  { label: "Services", path: "services", element: <Services /> },
  {
    label: "Services",
    path: "services/feuilles-d-heures",
    element: <Services />,
  },
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
    subNavigation: [
      {
        label: "Gestion des Comptes",
        path: "gestion-des-comptes",
        element: <AccountManager />,
      },
    ],
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

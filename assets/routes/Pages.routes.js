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
import Effectifs from "../Pages/CommandStaffSupervisor/Effectifs";
import RedirectRoutes from "./RedirectRoutes";
import ChefAccusation from "../Pages/Ressources/ChefAccusations";
import Grades from "../Pages/Ressources/Grades";
import {
  ALL_ACCESS,
  SUPERVISOR_ACCESS,
  COMMAND_STAFF_ACCESS,
  POLICE_ACADEMY,
  DOJ,
} from "../constants/acces";
import Comptabilite from "../Pages/CommandStaffSupervisor/Comptabilite";

export default [
  {
    label: "Services",
    path: "services",
    element: <RedirectRoutes allowedGrades={ALL_ACCESS} />,
    subNavigation: [
      {
        label: "Services",
        path: "",
        element: <Services />,
        index: true,
        subNavigation: [],
      },
      {
        label: "Services",
        path: "feuilles-d-heures",
        element: <Services />,
        index: false,
        subNavigation: [],
      },
    ],
  },
  {
    label: "DOJ",
    path: "doj",
    element: <RedirectRoutes allowedGrades={DOJ} />,
    index: false,
    subNavigation: [],
  },

  {
    label: "MDT",
    path: "mdt",
    element: <MDT />,
    subNavigation: [
      {
        label: "Civil",
        path: "civil",
        element: <Civil />,
        index: true,
        subNavigation: [],
      },
      {
        label: "Documents",
        path: "documents",
        element: <Documents />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Pannic Button",
        path: "panic-button",
        element: <PanicButton />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Rapport d'incident",
        path: "rapport-d-incident",
        element: <RapportIncident />,
        index: false,
        subNavigation: [],
      },
    ],
  },
  {
    label: "Civil",
    path: "civil/:slug",
    element: <CivilSelected />,
    index: false,
    subNavigation: [],
  },
  {
    label: "Senior Lead Officier",
    path: "senior-lead-officier",
    element: <RedirectRoutes allowedGrades={SUPERVISOR_ACCESS} />,
    index: false,
    subNavigation: [],
  },
  {
    label: "Police Academy",
    path: "police-academy",
    element: <RedirectRoutes allowedGrades={POLICE_ACADEMY} />,
    index: false,
    subNavigation: [],
  },
  {
    label: "Command Staff Supervisor",
    path: "command-staff-supervisor",
    element: <RedirectRoutes allowedGrades={SUPERVISOR_ACCESS} />,
    subNavigation: [
      {
        label: "Gestion des Comptes",
        path: "gestion-des-comptes",
        element: <AccountManager />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Effectifs",
        path: "effectifs",
        element: <Effectifs />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Comptabilités",
        path: "comptabilites",
        element: <Comptabilite />,
        index: false,
        subNavigation: [],
      },
    ],
  },
  {
    label: "Gestion des ressources",
    path: "gestion-des-ressources",
    element: <RedirectRoutes allowedGrades={COMMAND_STAFF_ACCESS} />,
    index: false,
    subNavigation: [
      {
        label: "Gestion des Chef d'accusations",
        path: "gestion-des-chef-d-accusations",
        element: <ChefAccusation />,
        index: true,
        subNavigation: [],
      },
      {
        label: "Gestion des Grades",
        path: "gestion-des-grades",
        element: <Grades />,
        index: false,
        subNavigation: [],
      },
    ],
  },

  {
    label: "Mon Compte",
    path: "compte",
    element: <Compte />,
    index: false,
    subNavigation: [],
  },
  {
    label: "Mes Reglages",
    path: "reglages",
    element: <Reglage />,
    index: false,
    subNavigation: [],
  },
];

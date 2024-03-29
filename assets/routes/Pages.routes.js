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
  EFFECTIF_ACCESS,
  DOJ_ACCESS,
  POLICE_ACADEMY_ACCESS,
} from "../constants/acces";
import RapportIncidentTab from "../Pages/CommandStaffSupervisor/RapportIncidentTab";
import RapportRookieTab from "../Pages/PoliceAcademy/RapportRookie";
import PlaintesTab from "../Pages/Services/PlaintesTab";
import ForgottenPassword from "../Pages/CommandStaffSupervisor/ForgottenPasswordTab";
import Saisie from "../Pages/Services/Saisie";
import DemandeComptabilite from "../Pages/Services/DemandeComptabilite";
import ComptabilitePriseDeService from "../Pages/CommandStaffSupervisor/ComptabilitePriseDeService";
import ComptabiliteServices from "../Pages/CommandStaffSupervisor/ComptabiliteService";
import Trombinoscop from "../Pages/Services/Trombinoscop";
import Dispatch from "../Pages/Services/Dispatch";

export default [
  {
    label: "Services",
    path: "services",
    element: <RedirectRoutes allowedGrades={EFFECTIF_ACCESS} />,
    subNavigation: [
      {
        label: "Services",
        path: "",
        element: <Services />,
        index: true,
        subNavigation: [],
      },
      {
        label: "Feuilles d'heures",
        path: "feuilles-d-heures",
        element: <Services />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Saisies",
        path: "saisies",
        element: <Saisie />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Trombinoscop",
        path: "trombinoscop",
        element: <Trombinoscop />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Services",
        path: "plaintes",
        element: <PlaintesTab />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Demande de comptabilité",
        path: "demande-de-compatibilite",
        element: <DemandeComptabilite />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Dispatch",
        path: "dispatch",
        element: <Dispatch />,
        index: false,
        subNavigation: [],
      },
    ],
  },
  {
    label: "DOJ",
    path: "doj",
    element: <RedirectRoutes allowedGrades={DOJ_ACCESS} />,
    index: false,
    subNavigation: [
      {
        label: "DOJ - Civil",
        path: "civil",
        element: <Civil />,
        index: true,
        subNavigation: [],
      },
    ],
  },

  {
    label: "MDT",
    path: "mdt",
    element: <MDT />,
    subNavigation: [
      {
        label: "MDT",
        path: "",
        element: <RedirectRoutes allowedGrades={EFFECTIF_ACCESS} />,
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
    ],
  },
  {
    label: "Civil",
    path: "civil/:slug/:id",
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
    element: <RedirectRoutes allowedGrades={POLICE_ACADEMY_ACCESS} />,
    index: false,
    subNavigation: [
      {
        labe: "Rapport Rookie",
        path: "rapport-rookie",
        element: <RapportRookieTab />,
        index: false,
        subNavigation: [],
      },
    ],
  },
  {
    label: "Command Staff Supervisor",
    path: "command-staff-supervisor",
    element: <RedirectRoutes allowedGrades={SUPERVISOR_ACCESS} />,
    subNavigation: [
      {
        label: "Rapports d'incidents",
        path: "voir-rapport-d-incidents",
        element: <RapportIncidentTab />,
        index: false,
        subNavigation: [],
      },
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
        label: "Comptabilités - Prise de service",
        path: "comptabilites-prise-de-services",
        element: <ComptabilitePriseDeService />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Comptabilités - Service",
        path: "comptabilites-sercices",
        element: <ComptabiliteServices />,
        index: false,
        subNavigation: [],
      },
      {
        label: "Demande de nouveau mot de passe",
        path: "demande-mot-de-passe",
        element: <ForgottenPassword />,
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

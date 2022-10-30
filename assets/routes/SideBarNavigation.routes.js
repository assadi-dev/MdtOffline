import {
  ALL_ACCESS,
  SUPERVISOR_ACCESS,
  COMMAND_STAFF_ACCESS,
} from "../constants/acces";

export default [
  {
    path: "",
    label: "Accueil",
    selected: true,
    submenu: [],
    end: true,
    allowed: ALL_ACCESS,
  },
  {
    path: "services",
    label: "Services",
    selected: false,
    openDropdown: false,
    end: false,
    allowed: ALL_ACCESS,
    submenu: [
      {
        path: "/feuilles-d-heures",
        label: "Feuilles d'heures",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/note-de-frais",
        label: "Notes de frais",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/trombinoscop",
        label: "Trombinoscop",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/feuille-de-calcul",
        label: "Feuille de calcul",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/demande-de-compatibilite",
        label: "Demande de comptabilité",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/plaintes",
        label: "Plaintes",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
    ],
  },
  {
    path: "mdt",
    label: "MDT",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [],
    allowed: ALL_ACCESS,
  },
  {
    path: "senior-lead-officier",
    label: "Senior Lead Officier",
    selected: false,
    openDropdown: false,
    end: false,
    allowed: SUPERVISOR_ACCESS,
    submenu: [
      {
        path: "/outil-slo",
        label: "Outil SLO",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/avis-senior-leading-officier",
        label: "Avis Senior Leading Officier",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
    ],
  },
  {
    path: "police-academy",
    label: "Police Academy",
    selected: false,
    openDropdown: false,
    end: false,
    allowed: ALL_ACCESS,
    submenu: [
      {
        path: "/rapport-rookie",
        label: "Rapports Rookie",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
    ],
  },
  {
    path: "command-staff-supervisor",
    label: "Command Staff / Supervisor",
    selected: false,
    openDropdown: false,
    end: false,
    allowed: COMMAND_STAFF_ACCESS,
    submenu: [
      {
        path: "/voir-rappor-d-incidents",
        label: "Voir les rapports d'incidents",
        selected: false,
        openDropdown: false,
        submenu: [],
        end: false,
      },
      {
        path: "/comptabilites",
        label: "Comptabilités",
        selected: false,
        openDropdown: false,
        submenu: [],
      },
      {
        path: "/effectifs",
        label: "Effectifs",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/gestion-des-comptes",
        label: "Gestion des comptes",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
      {
        path: "/avis-promotions",
        label: "Avis promotions",
        selected: false,
        openDropdown: false,
        end: false,
        submenu: [],
      },
    ],
  },

  {
    path: "/gestion-des-ressources",
    label: "Gestion des ressources",
    selected: false,
    openDropdown: false,
    end: false,
    allowed: COMMAND_STAFF_ACCESS,
    submenu: [
      {
        path: "/gestion-des-chef-d-accusations",
        label: "Gestion des Chef d'accusations",
        selected: false,
        openDropdown: false,
        submenu: [],
        end: false,
      },
      {
        path: "/gestion-des-grades",
        label: "Gestion des Grades",
        selected: false,
        openDropdown: false,
        submenu: [],
        end: false,
      },
    ],
  },
];

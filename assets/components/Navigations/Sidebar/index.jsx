import React, { useState } from "react";
import { PoliceV1 } from "../../SVG";
import {
  SidebarContainer,
  SideMenuList,
  SideNavItem,
  SideNavlink,
  SubMenuList,
  SubMenuListItem,
  SubMenuNavLink,
} from "./Sidebar.styled";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

const navigations = [
  { path: "", label: "Accueil", selected: true, submenu: [], end: true },
  {
    path: "services",
    label: "Services",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [
      { path: "/feuilles-d-heures", label: "Feuilles d'heures" },
      { path: "/note-de-frais", label: "Notes de frais" },
      { path: "/trombinoscop", label: "Trombinoscop" },
      { path: "/feuille-de-calcul", label: "Feuille de calcul" },
      { path: "/demande-de-compatibilite", label: "Demande de comptabilité" },
    ],
  },
  {
    path: "mdt",
    label: "MDT",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [],
  },
  {
    path: "senior-lead-officier",
    label: "Senior Lead Officier",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [
      { path: "/", label: "Outil SLO" },
      { path: "/", label: "Avis Senior Leading Officier" },
    ],
  },
  {
    path: "police-academy",
    label: "Police Academy",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [{ path: "/rapport-rookie", label: "Rapports Rookie" }],
  },
  {
    path: "command-staff-supervisor",
    label: "Command Staff / Supervisor",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [
      {
        path: "/voir-rappor-d-incidents",
        label: "Voir les rapports d'incidents",
      },
      { path: "/comptabilites", label: "Comptabilités" },
      { path: "/effectifs", label: "Effectif" },
      { path: "/gestion-des-comptes", label: "Gestion des comptes" },
      { path: "/avis-promotions", label: "Avis promotions" },
    ],
  },
];

const Sidebar = () => {
  const [routes, setRoute] = useState(navigations);

  const activeRoute = (label) => {
    let reset = routes.map((r) => {
      if (r.label != label) {
        r.selected = false;
        r.openDropdown = false;
      } else {
        r.selected = true;
        r.openDropdown = !r.openDropdown;
      }
      return r;
    });
    setRoute(reset);
  };

  return (
    <SidebarContainer>
      <SideMenuList>
        {routes.map((route) => (
          <SideNavItem key={uniqid()}>
            <SideNavlink
              to={route.path}
              onClick={() => activeRoute(route.label)}
              state={{ title: route.label }}
              end={route.end}
            >
              <span className="active-icon">
                <PoliceV1 />
              </span>
              {route.label}
            </SideNavlink>

            <SubMenuList
              isActive={route.openDropdown}
              className={route.openDropdown ? "drop-open" : "drop-close"}
            >
              {route.submenu.length > 0 &&
                route.submenu.map((submenu) => (
                  <SubMenuListItem key={uniqid()}>
                    <SubMenuNavLink
                      to={route.path + submenu.path}
                      state={{ title: submenu.label }}
                    >
                      {submenu.label}{" "}
                    </SubMenuNavLink>
                  </SubMenuListItem>
                ))}
            </SubMenuList>
          </SideNavItem>
        ))}
      </SideMenuList>
    </SidebarContainer>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { PoliceV1 } from "../../SVG";
import {
  SidebarContainer,
  SideMenuList,
  SideNavItem,
  SideNavlink,
  SubMenuList,
  SubMenuListItem,
} from "./Sidebar.styled";
import uniqid from "uniqid";

const navigations = [
  { path: "", label: "Accueil", selected: true, submenu: [], end: true },
  {
    path: "services",
    label: "Services",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [
      { path: "/", label: "Feuilles d'heures" },
      { path: "/", label: "Notes de frais" },
      { path: "/", label: "Trombinoscop" },
      { path: "/", label: "Feuille de calcul" },
      { path: "/", label: "Demande de comptabilité" },
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
    submenu: [{ path: "/", label: "Rapports Rookie" }],
  },
  {
    path: "command-staff-supervisor",
    label: "Command Staff / Supervisor",
    selected: false,
    openDropdown: false,
    end: false,
    submenu: [
      { path: "/", label: "Voir les rapporsts d'incidents" },
      { path: "/", label: "Comptabilités" },
      { path: "/", label: "Effectif" },
      { path: "/", label: "Gestion" },
      { path: "/", label: "Avis promotions" },
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
                    {submenu.label}
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

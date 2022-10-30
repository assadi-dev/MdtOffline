import React, { useState } from "react";
import { PoliceV1 } from "../../SVG";
import {
  SidebarContainer,
  SideMenuList,
  SideNavItem,
  SideNavlink,
  SideNavlinkButton,
  SubMenuList,
  SubMenuListItem,
  SubMenuNavLink,
} from "./Sidebar.styled";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import SidebarNav from "../../../routes/SideBarNavigation.routes";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [routes, setRoute] = useState(SidebarNav);
  const agentConnect = useSelector((state) => state.AuthenticateReducer);
  const grade = agentConnect.grade.nom;

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

  const disableNavigation = (e) => {
    e.preventDefault();
  };

  return (
    <SidebarContainer>
      <SideMenuList>
        {routes.map((route) => (
          <SideNavItem key={uniqid()}>
            {route.submenu.length > 0 ? (
              <SideNavlinkButton
                className={route.selected && "active"}
                to={route.path}
                onClick={() => {
                  activeRoute(route.label);
                }}
                state={{ title: route.label }}
              >
                <span className="active-icon">
                  <PoliceV1 />
                </span>
                {route.label}
              </SideNavlinkButton>
            ) : (
              <SideNavlink
                className={route.selected && "active"}
                to={route.path}
                onClick={() => activeRoute(route.label)}
                state={{ title: route.label }}
              >
                <span className="active-icon">
                  <PoliceV1 />
                </span>
                {route.label}
              </SideNavlink>
            )}

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

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
import { Link, useNavigate } from "react-router-dom";
import SidebarNav from "../../../routes/SideBarNavigation.routes";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { TOKEN_STORAGE_NAME } from "../../../constants/localStorage";

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

  const tokenStorage = Cookies.get(TOKEN_STORAGE_NAME);
  const navigate = useNavigate();
  let usergrade = "Rookie";

  if (tokenStorage) {
    const decode = jwt_decode(tokenStorage);

    usergrade = decode.categorie.toLowerCase();

    try {
    } catch (error) {}
  }

  const isAllowed = (allowedGrades) => {
    allowedGrades =
      allowedGrades && allowedGrades.map((grade) => grade.toLowerCase());
    if (allowedGrades && allowedGrades.includes(usergrade)) {
      return true;
    }
    return false;
  };

  return (
    <SidebarContainer>
      <SideMenuList>
        {routes.map((route) => (
          <SideNavItem key={uniqid()}>
            {route.submenu.length > 0
              ? isAllowed(route.allowed) && (
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
                )
              : isAllowed(route.allowed) && (
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
                route.submenu.map(
                  (submenu) =>
                    isAllowed && (
                      <SubMenuListItem key={uniqid()}>
                        <SubMenuNavLink
                          to={route.path + submenu.path}
                          state={{ title: submenu.label }}
                        >
                          {submenu.label}{" "}
                        </SubMenuNavLink>
                      </SubMenuListItem>
                    )
                )}
            </SubMenuList>
          </SideNavItem>
        ))}
      </SideMenuList>
    </SidebarContainer>
  );
};

export default Sidebar;

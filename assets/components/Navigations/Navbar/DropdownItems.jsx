import React from "react";
import { PowwerOffOutline, SettingOutline, UserOutline } from "../../SVG";
import { MenuList, NavBarLink } from "./Navbar.styled";

const DropdownItems = () => {
  return (
    <MenuList>
      <li className="dropdown-item">
        <NavBarLink to="/compte" state={{ title: "Mon compte" }}>
          <span>
            <UserOutline />
          </span>
          Mon compte
        </NavBarLink>
      </li>
      <li className="dropdown-item">
        <NavBarLink to="/reglages" state={{ title: "Mes Réglages" }}>
          <span>
            <SettingOutline />
          </span>
          Mes Reglages
        </NavBarLink>
      </li>
      <li className="dropdown-item">
        <NavBarLink to="/" state={{ title: "" }}>
          {" "}
          <span>
            <PowwerOffOutline />
          </span>
          Déconnexion
        </NavBarLink>
      </li>
    </MenuList>
  );
};

export default DropdownItems;

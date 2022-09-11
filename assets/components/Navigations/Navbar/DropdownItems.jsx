import React from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../redux/actions/Authentication.action";
import { deconnect } from "../../../service/UserConnect";
import { PowwerOffOutline, SettingOutline, UserOutline } from "../../SVG";
import { DeconnectButton, MenuList, NavBarLink } from "./Navbar.styled";

const DropdownItems = () => {
  const dispatch = useDispatch();
  const handleDeconnect = () => {
    deconnect().then((res) => {
      dispatch(userLogout());
    });
  };

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
        <DeconnectButton onClick={handleDeconnect}>
          {" "}
          <span>
            <PowwerOffOutline />
          </span>
          Déconnexion
        </DeconnectButton>
      </li>
    </MenuList>
  );
};

export default DropdownItems;

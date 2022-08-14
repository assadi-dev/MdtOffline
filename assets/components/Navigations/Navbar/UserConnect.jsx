import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "../../SVG";
import DropdownItems from "./DropdownItems";
import {
  Avatar,
  ChevronContainer,
  DropDownContainer,
  UserConnectContainer,
  UserGradStyle,
  UserNameStyle,
} from "./Navbar.styled";

const UserConnect = () => {
  const [show, setShow] = useState(false);
  const userConnectRef = useRef();

  useEffect(() => {
    const closeDropDownMenu = (e) => {
      if (!userConnectRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", closeDropDownMenu);

    return () => {
      document.removeEventListener("mousedown", closeDropDownMenu);
    };
  }, []);

  const showDropDownMenu = () => {
    setShow(!show);
  };

  return (
    <UserConnectContainer ref={userConnectRef} onClick={showDropDownMenu}>
      <Avatar />
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex" }}>
          <UserNameStyle>
            Nom Prenom <UserGradStyle>555-sergent-II</UserGradStyle>{" "}
          </UserNameStyle>
          <ChevronContainer alternate={show}>
            <ChevronDown />
          </ChevronContainer>
        </div>
      </div>

      <DropDownContainer showMenu={show}>
        <DropdownItems />
      </DropDownContainer>
    </UserConnectContainer>
  );
};

export default UserConnect;

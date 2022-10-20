import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useFecthData from "../../../hooks/useFecthData";
import { getGradeById } from "../../../utils/userData";
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

  const userAuth = useSelector((state) => state.AuthenticateReducer);
  const { data } = useFecthData("/grades");

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

  const userGrade = userAuth.grade
    ? getGradeById(parseInt(userAuth.grade), data)
    : "";

  return (
    <UserConnectContainer ref={userConnectRef} onClick={showDropDownMenu}>
      <Avatar img={userAuth.photo} />
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex" }}>
          <UserNameStyle>
            {userAuth.username}{" "}
            <UserGradStyle>{`${
              userAuth.matricule ? userAuth.matricule : "N/A"
            }-${userGrade}`}</UserGradStyle>{" "}
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

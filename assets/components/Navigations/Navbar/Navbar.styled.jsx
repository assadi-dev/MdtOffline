import styled from "styled-components";
import { Link } from "react-router-dom";
import userImg from "../../ressources/img/user.jpg";

const avatarWidth = "50px";
const chevronWidth = "20px";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-dark);
  padding: 18px 22px;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  box-shadow: 0px -1px 5px 0px rgba(255, 255, 255, 0.5);
  max-height: var(--navbar-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

export const LeftCol = styled.div`
  min-width: 250px;
`;
export const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-family: var(--font-title);
  font-weight: normal;
  letter-spacing: 2.5px;
`;

export const RightCol = styled.div`
  min-width: 250px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Avatar = styled.div`
  width: ${avatarWidth};
  height: ${avatarWidth};
  border-radius: 100%;
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${userImg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ServiceButton = styled.span`
  width: ${avatarWidth};
  height: ${avatarWidth};
  margin: 0 1.3rem;
  color: ${(props) => (props.active ? "#59CE8F" : "#666")};
  cursor: pointer;
  transition: all 0.35s;
  svg {
    width: ${avatarWidth};
    height: ${avatarWidth};
    transition: all 0.35s;
  }
  &:hover {
    svg {
      color: #59ce8f;
    }
  }
  &:active {
    transform: scale(1.2);
  }
`;

export const PanicButton = styled.span`
  background: ${(props) => (props.active ? "#ba5a3c" : " #ba5a3c20")};
  color: ${(props) =>
    props.active ? "var(--background-color-dark)" : " #ba5a3c"};
  font-size: 14px;
  padding: 12px;
  border-radius: 10px;
  border: solid 2px #ba5a3c;
  cursor: pointer;
  transition: all 0.35s;
  font-weight: bold;
  font-family: "Azonix";
  box-shadow: ${(props) => (props.active ? "0px 0px 15px 5px #ba5a3c50" : "")};
  &:hover {
    box-shadow: 0px 0px 15px 5px #ba5a3c50;
  }
  &:active {
    transform: scale(1.2);
  }
`;

// Menu dropdown de l'utilisateur connecté

export const UserConnectContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const UserNameStyle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  min-width: 125px;
`;

export const UserGradStyle = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ChevronContainer = styled.span`
  width: ${chevronWidth};
  height: ${chevronWidth};
  transition: all 0.35s;
  svg {
    width: ${chevronWidth};
    height: ${chevronWidth};
    transform: ${(props) => (props.alternate ? "rotate(180deg)" : "rotate(0)")};
    transition: all 0.35s;
  }
`;

export const DropDownContainer = styled.div`
  width: 225px;
  min-height: 125px;
  background-color: var(--background-color-dark);
  font-weight: 500;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0px 0px 3px 0px #ffffff50;
  transition: all 0.5s;
  z-index: -1;
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
  transform: ${(props) =>
    props.showMenu ? "translateY(120%)" : "translateY(80%)"};

  animation: ${({ showMenu }) =>
    showMenu
      ? "0.35s ease-in-out fadeIn forwards"
      : "0.35s ease-in-out  fadeOut forwards"};
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
`;

// Sous-Menus List

export const MenuList = styled.div`
  width: 100%;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .dropdown-item {
    min-width: 100px;
    font-weight: 300;
    font-size: 16px;
    margin: 1rem 0;
    span,
    svg {
      width: 20px;
      height: 20px;
    }
    span {
      display: grid;
      place-items: center;
    }
  }
`;

export const NavBarLink = styled(Link)`
  display: grid;
  grid-template-columns: 35px 1fr;
  align-items: center;
`;

export const DeconnectButton = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
  align-items: center;
  cursor: pointer;
`;

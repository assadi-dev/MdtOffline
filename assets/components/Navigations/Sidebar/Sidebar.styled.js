import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  transition: all 0.35s ease-in-out;
  overflow: hidden;
  width: 100%;
  padding-top: 15px;

  .drop-open {
    animation: 0.35s openSubmenu ease-in-out forwards;
  }
  .drop-close {
    animation: 0.35s closeSubmenu ease-in-out forwards;
  }
  .active-icon {
    opacity: 0;
    transform: translateX(-5px);
  }
  .active {
    color: var(--color-primary-button);
    .active-icon {
      animation: 0.35s showIcon ease-in-out forwards;
    }
  }

  @keyframes showIcon {
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes openSubmenu {
    to {
      visibility: visible;
      opacity: 1;
      max-height: 250px;
    }
  }
  @keyframes closeSubmenu {
    to {
      visibility: hidden;
      opacity: 0;
      max-height: 22px;
    }
  }
`;

export const SideMenuList = styled.ul`
  padding-top: 15px;
  width: 100%;
  transition: all 0.35s;
`;

export const SideNavItem = styled.li`
  transition: all 0.35s ease-in;
  min-width: 100px;

  font-family: var(--font-title);
`;

export const SideNavlink = styled(NavLink)`
  min-height: 22px;
  display: grid;
  font-family: var(--font-title);
  align-items: center;
  grid-template-columns: 45px 1fr;
  transition: 0.35s ease-in-out;
  line-height: 20px;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  span,
  svg {
    width: 25px;
    height: 25px;
  }

  font-size: 13px;
  text-transform: uppercase;
  min-width: 130px;
  max-width: 100%;
  /* Media Queries */

  @media screen and (min-width: 992px) {
    max-width: 182px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 220px;
  }
`;

export const SideNavlinkButton = styled.div`
  min-height: 22px;
  display: grid;
  font-family: var(--font-title);
  align-items: center;
  grid-template-columns: 45px 1fr;
  transition: 0.35s ease-in-out;
  line-height: 20px;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  span,
  svg {
    width: 25px;
    height: 25px;
  }

  font-size: 13px;
  text-transform: uppercase;
  min-width: 130px;
  max-width: 100%;
  /* Media Queries */

  @media screen and (min-width: 992px) {
    max-width: 182px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 220px;
  }
`;

export const SubMenuNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  grid-template-columns: 45px 1fr;
  transition: 0.35s ease-in-out;
  line-height: 20px;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  span,
  svg {
    width: 25px;
    height: 25px;
  }

  font-size: 13px;
  min-width: 130px;
  max-width: 100%;
  /* Media Queries */

  @media screen and (min-width: 992px) {
    max-width: 190px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 240px;
  }
`;

export const SubMenuList = styled.ul`
  padding: 10px;
  margin-left: 50px;
  width: 100%;
  max-height: 22px;
  transition: all 0.35s ease-in-out;
  opacity: 0;
  overflow-y: auto;
`;

export const SubMenuListItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  max-width: 180px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

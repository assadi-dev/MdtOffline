import styled from "styled-components";

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-areas: "main main";
  padding: calc(var(--navbar-height) + 20px) 22px 22px;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;

  .left-col {
    display: none;
    grid-area: sidebar;
    padding: 18px 15px;
    position: relative;
    overflow-x: hidden;
  }
  .right-col {
    grid-area: main;
    padding: 18px 15px;
    position: relative;
  }

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-areas: "sidebar main";
    padding: calc(var(--navbar-height) + 20px) 22px 22px;
    .left-col {
      display: block;
    }
    .right-col {
      padding: 18px 12px;
    }
  }

  @media screen and (min-width: 1600px) {
    display: grid;
    grid-template-columns: 380px 1fr;
  }
`;

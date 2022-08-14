import React from "react";
import styled from "styled-components";

const blueColor = "#2B7DE9";
const blueDark = "#131B26";
const blueGrayColor = "#2C3748";

export const MDTwrapper = styled.div`
  & .row {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex: 0;
    width: 100%;
  }

  & .mdt-row-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 0;
    width: 100%;
    padding: 15px;
  }

  & .mdt-button-section {
    height: 135px;
    display: grid;
    place-items: center;
    max-width: 60%;
    margin: 18px auto;
    grid-template-columns: repeat(auto-fit, 75px);

    & .mdt-button {
      width: 60px;
      height: 60px;
      background: #2b7de9;
      filter: opacity(0.5);

      :hover {
        filter: opacity(1);
      }
      :active {
        filter: opacity(0.5);
      }
    }

    & .active {
      .mdt-button {
        filter: opacity(1);
        box-shadow: 0px 0px 10px 3px #2b7de9;
        background: #2b7de9;
      }
    }

    @media screen and (min-width: 992px) {
      width: 440px;
    }
  }
`;

// Card Style
export const MDTCardwrapper = styled.div`
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  border: 1px solid ${blueColor};
  background: ${blueGrayColor};
  position: relative;
  margin: 18px 0;
  overflow: hidden;
  filter: drop-shadow(0px 4px 20px rgba(43, 125, 233, 0.1));
  @media screen and (min-width: 992px) {
    max-width: fit-content;
  }
`;

export const MDTCardHeader = styled.div`
  min-height: 24px;

  background: ${blueDark};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 15px;

  @media screen and (min-width: 992px) {
    padding: 22px;
    min-width: 320px;
    font-size: 18px;
  }
`;

export const MDTCardBody = styled.div`
  padding: 18px 15px;
`;

export const MDTlist = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-top: 1.2rem;
    font-weight: 300;
  }
  li:first-child {
    margin-top: 0;
  }
`;
// Card Style

// Button Style
export const IconButton = styled.span`
  width: 25px;
  height: 25px;
  color: white;
  svg {
    width: 25px;
    height: 25px;
  }
`;
// Button Style

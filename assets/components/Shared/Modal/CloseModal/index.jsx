import React from "react";
import styled from "styled-components";
import { CrossIcon } from "../../../SVG";

const CloseBtnContainer = styled.span`
  display: block;
  position: relative;
  transition: all 0.35s;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    color: rgba(255, 255, 255, 1);
  }
  cursor: pointer;
  :active {
    transform: scale(0.8);
    opacity: 0.3;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

const CloseModalBtn = ({ ...props }) => {
  return (
    <CloseBtnContainer {...props}>
      <CrossIcon />
    </CloseBtnContainer>
  );
};

export default CloseModalBtn;

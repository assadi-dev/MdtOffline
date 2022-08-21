import React from "react";
import styled from "styled-components";

const CloseBtnContainer = styled.span`
  display: block;
  position: relative;
  transition: all 0.35s;
  cursor: pointer;
  :active {
    transform: scale(0.8);
    opacity: 0.3;
  }
  :before {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    border-radius: 100px;
    transition: all 0.35s;
  }
  :after {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-radius: 100px;
    transition: all 0.35s;
  }
`;

const CloseModalBtn = ({ ...props }) => {
  return <CloseBtnContainer {...props}></CloseBtnContainer>;
};

export default CloseModalBtn;

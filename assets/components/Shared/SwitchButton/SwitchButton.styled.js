import styled from "styled-components";

export const ButtonContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  height: 28px;
  width: 50px;
  position: relative;

  & input[type="checkbox"] {
    display: none;
  }
  & .switch:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: var(--color-white);
    left: 3px;
    bottom: 2px;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + .switch {
    background-color: var(--color-blue-primary);
  }
  input:checked + .switch:before {
    transform: translateX(20px);
  }
`;

export const SwitchIcon = styled.span`
  position: absolute;
  border-radius: 50px;
  background-color: ${({ sliderOffColor }) =>
    sliderOffColor ? sliderOffColor : "var(--color-lightBlue-secondary)"};
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  transition: 0.4s;
`;
